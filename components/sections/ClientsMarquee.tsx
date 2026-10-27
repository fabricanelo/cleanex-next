import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";
import MarqueeViewport from "@/components/ui/MarqueeViewport";
import { clientes } from "@/lib/clientes-data";

// La lista se renderiza dos veces y la pista se desplaza -50%, así el final
// de la primera copia empalma con el inicio de la segunda sin saltos.
// La copia duplicada queda fuera del árbol de accesibilidad y del tabulado.
function LogoList({ duplicate = false }: { duplicate?: boolean }) {
  return (
    <ul
      className={`flex shrink-0 items-center ${duplicate ? "motion-reduce:hidden" : ""}`}
      aria-hidden={duplicate || undefined}
    >
      {clientes.map((cliente) => (
        <li key={cliente.logo} className="shrink-0 px-2 sm:px-3">
          <a
            href={cliente.url}
            target="_blank"
            rel="noopener noreferrer"
            tabIndex={duplicate ? -1 : undefined}
            aria-label={`${cliente.nombre} (abre su sitio en una pestaña nueva)`}
            className="flex h-24 w-36 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 transition hover:border-[var(--primary)] hover:shadow-lg focus-visible:border-[var(--primary-dark)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-dark)] sm:h-28 sm:w-44"
          >
            {/* Los archivos originales traen margen blanco propio; se amplían
                para equilibrar tamaños y `escala` corrige los que no lo tienen. */}
            <Image
              src={`/images/clients/${cliente.logo}`}
              alt={duplicate ? "" : `Logo de ${cliente.nombre}`}
              width={176}
              height={112}
              className="h-full w-full object-contain"
              style={{ transform: `scale(${1.3 * (cliente.escala ?? 1)})` }}
            />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default function ClientsMarquee() {
  return (
    <section className="bg-white py-20">
      <Container className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Clientes
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Empresas que confían en nosotros
          </h2>
        </div>

        <Link
          href="/clientes"
          className="shrink-0 text-sm font-semibold text-gray-700 underline underline-offset-4 transition hover:text-[var(--primary-dark)]"
        >
          Ver todos los clientes
        </Link>
      </Container>

      <MarqueeViewport className="group mt-12 overflow-hidden py-3 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)] motion-reduce:overflow-x-auto">
        <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] group-has-[:focus-visible]:[animation-play-state:paused] group-active:[animation-play-state:paused] motion-reduce:animate-none">
          <LogoList />
          <LogoList duplicate />
        </div>
      </MarqueeViewport>
    </section>
  );
}

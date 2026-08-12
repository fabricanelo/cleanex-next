import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import { formatFecha, novedades } from "@/lib/novedades-data";
import { IconArrowRight } from "@/components/ui/Icon";

export default function NovedadesPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Novedades"
        title="Novedades"
        description="Enterate de las últimas noticias de Cleanex Argentina."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {novedades.map((novedad) => (
              <Link
                key={novedad.slug}
                href={`/novedades/${novedad.slug}`}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:border-[var(--primary)] hover:shadow-lg"
              >
                <p className="text-sm text-gray-500">
                  {formatFecha(novedad.fecha)}
                </p>

                <h2 className="mt-2 text-2xl font-semibold text-gray-900">
                  {novedad.titulo}
                </h2>

                <p className="mt-4 leading-relaxed text-gray-600">
                  {novedad.resumen}
                </p>

                <span className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--primary-dark)]">
                  Leer más
                  <IconArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

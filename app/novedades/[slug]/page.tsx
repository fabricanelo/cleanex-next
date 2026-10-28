import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import { IconArrowRight } from "@/components/ui/Icon";
import { formatFecha, getNovedad, novedades } from "@/lib/novedades-data";

export function generateStaticParams() {
  return novedades.map((novedad) => ({ slug: novedad.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const novedad = getNovedad(slug);

  if (!novedad) {
    return {};
  }

  return {
    title: `${novedad.titulo} | Cleanex Argentina`,
    description: novedad.resumen,
  };
}

export default async function NovedadPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const novedad = getNovedad(slug);

  if (!novedad) {
    notFound();
  }

  return (
    <main>
      <PageHeader
        eyebrow={novedad.etiqueta ?? "Novedades"}
        title={novedad.titulo}
      />

      <section className="py-20">
        <Container>
          <article className="max-w-3xl">
            <p className="text-sm text-gray-500">
              <time dateTime={novedad.fecha}>{formatFecha(novedad.fecha)}</time>
            </p>

            <div className="mt-6 space-y-4">
              {novedad.cuerpo.map((bloque, i) =>
                typeof bloque === "string" ? (
                  <p key={i} className="leading-relaxed text-gray-600">
                    {bloque}
                  </p>
                ) : (
                  <ul
                    key={i}
                    className="list-disc space-y-2 pl-6 leading-relaxed text-gray-600 marker:text-[var(--primary-dark)]"
                  >
                    {bloque.lista.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ),
              )}
            </div>

            {novedad.cta && (
              <div className="mt-10 rounded-3xl border border-gray-200 bg-gray-50 p-6 sm:p-8">
                {novedad.cta.url ? (
                  <a
                    href={novedad.cta.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-gray-900 transition hover:bg-[var(--primary-dark)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary-dark)]"
                  >
                    {novedad.cta.texto}
                    <IconArrowRight className="h-4 w-4" aria-hidden="true" />
                    <span className="sr-only">(se abre en una pestaña nueva)</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center gap-2 rounded-full bg-gray-200 px-6 py-3 font-semibold text-gray-500"
                  >
                    {novedad.cta.texto}
                  </button>
                )}

                {novedad.cta.url ? (
                  novedad.cta.nota && (
                    <p className="mt-3 text-sm text-gray-500">
                      {novedad.cta.nota}
                    </p>
                  )
                ) : (
                  <p className="mt-3 text-sm text-gray-500">
                    La encuesta estará disponible próximamente.
                  </p>
                )}
              </div>
            )}

            <Link
              href="/novedades"
              className="mt-10 inline-block font-semibold text-[var(--primary-dark)] underline"
            >
              Volver a Novedades
            </Link>
          </article>
        </Container>
      </section>
    </main>
  );
}

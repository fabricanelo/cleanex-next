import { notFound } from "next/navigation";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import { formatFecha, getNovedad, novedades } from "@/lib/novedades-data";

export function generateStaticParams() {
  return novedades.map((novedad) => ({ slug: novedad.slug }));
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
      <PageHeader eyebrow="Novedades" title={novedad.titulo} />

      <section className="py-20">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm text-gray-500">
              {formatFecha(novedad.fecha)}
            </p>

            <div className="mt-6 space-y-4">
              {novedad.cuerpo.map((parrafo, i) => (
                <p key={i} className="leading-relaxed text-gray-600">
                  {parrafo}
                </p>
              ))}
            </div>

            <Link
              href="/novedades"
              className="mt-10 inline-block font-semibold text-[var(--primary-dark)] underline"
            >
              Volver a Novedades
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}

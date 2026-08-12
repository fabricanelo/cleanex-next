import Image from "next/image";
import Link from "next/link";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import { galeriaCategorias } from "@/lib/galeria-data";

export default function GaleriaPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Galería"
        title="Galería de imágenes"
        description="Recorré nuestros trabajos de limpieza, mantenimiento y montaje industrial organizados por categoría."
      />

      <section className="py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {galeriaCategorias.map((categoria) => (
              <Link
                key={categoria.slug}
                href={`/galeria/${categoria.slug}`}
                className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition hover:border-[var(--primary)] hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                  <Image
                    src={`/images/gallery/${categoria.slug}/1.jpg`}
                    alt={categoria.titulo}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="p-5">
                  <h2 className="font-semibold text-gray-900">
                    {categoria.titulo}
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    {categoria.cantidad} fotos
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

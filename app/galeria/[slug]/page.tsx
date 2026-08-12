import Image from "next/image";
import { notFound } from "next/navigation";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import {
  galeriaCategorias,
  getGaleriaCategoria,
  getGaleriaImagenes,
} from "@/lib/galeria-data";

export function generateStaticParams() {
  return galeriaCategorias.map((categoria) => ({ slug: categoria.slug }));
}

export default async function GaleriaCategoriaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const categoria = getGaleriaCategoria(slug);

  if (!categoria) {
    notFound();
  }

  const imagenes = getGaleriaImagenes(categoria);

  return (
    <main>
      <PageHeader eyebrow="Galería" title={categoria.titulo} />

      <section className="py-20">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {imagenes.map((imagen) => (
              <div
                key={imagen.src}
                className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-gray-100"
              >
                <Image
                  src={imagen.src}
                  alt={imagen.alt}
                  fill
                  className="object-cover transition duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

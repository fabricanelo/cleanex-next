import Image from "next/image";
import Container from "@/components/ui/Container";

export default function About() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Empresa
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-gray-900">
              Compromiso, experiencia y calidad en cada servicio
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              En Cleanex Argentina trabajamos brindando soluciones de
              limpieza profesional para empresas, industrias y espacios
              corporativos.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Nuestro enfoque combina personal capacitado, procesos de
              trabajo eficientes y atención personalizada para garantizar
              resultados consistentes y confiables.
            </p>
          </div>

          <Image
                 src="/images/about/about-cleanex-logo.jpg"
                 alt="Equipo de Cleanex trabajando"
                 width={800}
                height={600}
                className="h-[450px] w-full rounded-3xl object-contain bg-white p-5 shadow-lg"
            />
        </div>
      </Container>
    </section>
  );
}
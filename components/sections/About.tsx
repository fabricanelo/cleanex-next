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
              CLEANEX es una empresa dedicada a brindar servicios a
              industrias. Nuestro trabajo está enfocado principalmente en
              labores de limpieza profesional de espacios confinados, tareas
              de higiene general, mantenimiento y montaje industrial.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Contamos con un grupo de profesionales especializados en
              Seguridad, Higiene y Medio Ambiente, Administrativo-Contable,
              Recursos Humanos, entre otros, que conforman un equipo de
              trabajo eficiente. Nuestro personal operativo posee el
              conocimiento, capacitación y experiencia necesaria en el rubro
              asegurando un desempeño óptimo y responsable.
            </p>
          </div>

          <Image
            src="/images/hero/planta-industrial.jpg"
            alt="Cleanex Argentina trabajando en planta industrial"
            width={1280}
            height={1045}
            className="h-[450px] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </Container>
    </section>
  );
}
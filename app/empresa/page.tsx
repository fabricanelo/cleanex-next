import Image from "next/image";
import PageHeader from "@/components/ui/PageHeader";
import Container from "@/components/ui/Container";
import { IconEye, IconMail, IconPhone, IconStar, IconTarget } from "@/components/ui/Icon";
import { WHATSAPP } from "@/lib/contacto-data";

const pilares = [
  {
    icon: IconTarget,
    title: "Misión",
    text: "Brindar soluciones integrales de limpieza e higiene, mantenimiento y montaje industrial, con rapidez, seriedad y efectividad a diferentes industrias, velando por la seguridad y salud de nuestros trabajadores.",
  },
  {
    icon: IconEye,
    title: "Visión",
    text: "Ser lideres en nuestro rubro, desarrollando alianzas rentables y estratégicas con otras empresas para brindar un mejor servicio.",
  },
  {
    icon: IconStar,
    title: "Valores",
    text: "Seguridad, Eficacia, Responsabilidad, Calidad, Capacidad resolutiva, Innovación y Creatividad, Liderazgo, Constancia y Compromiso, Proactividad.",
  },
];

const equipo = [
  {
    nombre: "Romina Muñoz",
    cargo: "Administración y presupuestos",
    titulo: "Lic. en Economía",
    email: "administracion@cleanexargentina.com",
    telefono: "+54 9 341 688-8634",
    telefonoNota: "Llamada y WhatsApp",
    whatsapp: WHATSAPP.administracionYLimpiezaSilos,
  },
  {
    nombre: "Juan Hernán Massoud",
    cargo: "Jefe de obras en plantas",
    titulo: "Tec. Higiene y seguridad",
    email: "shyma@cleanexargentina.com",
    telefono: "+54 9 341 684-9364",
    telefonoNota: "Sólo WhatsApp",
    whatsapp: WHATSAPP.seguridadHigieneYMedioAmbiente,
  },
  {
    nombre: "Eliana Rebagliatti",
    cargo: "Comercial y compras",
    titulo: "Lic. en Comercialización / Tec. en Marketing",
    email: "compras@cleanexargentina.com",
    email2: "comercial@cleanexargentina.com",
  },
  {
    nombre: "Carlos Muñoz",
    cargo: "Director y supervisor de montaje",
    titulo: "Director y Supervisor de Montaje",
    email: "administracion@cleanexargentina.com",
    telefono: "+54 9 3462 675-677",
    telefonoNota: "Llamada y WhatsApp",
    whatsapp: WHATSAPP.reparacionPlantas,
  },
];

export default function EmpresaPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Empresa"
        title="Cleanex Argentina"
        description="Nuestro trabajo está enfocado principalmente en labores de limpieza profesional de espacios confinados, tareas de higiene general, mantenimiento y montaje."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">
              Compromiso, experiencia y calidad en cada servicio
            </h2>

            <p className="mt-6 leading-relaxed text-gray-600">
              CLEANEX es una empresa dedicada a brindar servicios a
              industrias. Nuestro trabajo está enfocado principalmente en
              labores de limpieza profesional de espacios confinados, tareas
              de higiene general, mantenimiento y montaje industrial.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Actualmente contamos con un grupo de profesionales
              especializados en diversas áreas como Seguridad, Higiene y
              Medio Ambiente, Administrativo-Contable, Recursos Humanos,
              entre otros, los cuales en su conjunto conforman un equipo de
              trabajo eficiente. Nuestro personal operativo posee el
              conocimiento, capacitación y experiencia necesaria en el rubro
              asegurando así un desempeño óptimo y responsable.
            </p>

            <p className="mt-6 text-lg font-semibold text-gray-900">
              30 años de experiencia en el rubro metalúrgico y más de 10 años
              en limpieza profesional de silos.
            </p>
          </div>

          <Image
            src="/images/hero/planta-industrial.jpg"
            alt="Cleanex Argentina en tareas de montaje y limpieza industrial"
            width={1280}
            height={1045}
            className="h-[420px] w-full rounded-3xl object-cover shadow-lg"
          />
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Nuestros pilares
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {pilares.map((pilar) => (
              <div
                key={pilar.title}
                className="rounded-3xl border border-gray-200 bg-white p-8"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary-dark)]">
                  <pilar.icon className="h-6 w-6" />
                </span>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {pilar.title}
                </h3>

                <p className="mt-3 leading-relaxed text-gray-600">
                  {pilar.text}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20">
        <Container>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Equipo
          </p>

          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Nuestro equipo directivo
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {equipo.map((persona) => (
              <div
                key={persona.nombre}
                className="rounded-3xl border border-gray-200 bg-white p-8"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {persona.nombre}
                </h3>

                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[var(--primary-dark)]">
                  {persona.cargo}
                </p>

                <p className="mt-1 text-sm text-gray-500">{persona.titulo}</p>

                <div className="mt-5 space-y-2 text-sm text-gray-700">
                  <a
                    href={`mailto:${persona.email}`}
                    className="flex items-center gap-2 transition hover:text-[var(--primary-dark)]"
                  >
                    <IconMail className="h-4 w-4 shrink-0" />
                    {persona.email}
                  </a>

                  {persona.email2 && (
                    <a
                      href={`mailto:${persona.email2}`}
                      className="flex items-center gap-2 transition hover:text-[var(--primary-dark)]"
                    >
                      <IconMail className="h-4 w-4 shrink-0" />
                      {persona.email2}
                    </a>
                  )}

                  {persona.telefono && (
                    <a
                      href={persona.whatsapp}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 transition hover:text-[var(--primary-dark)]"
                    >
                      <IconPhone className="h-4 w-4 shrink-0" />
                      {persona.telefono}
                      <span className="text-gray-400">
                        ({persona.telefonoNota})
                      </span>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

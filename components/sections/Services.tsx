import Link from "next/link";
import Container from "@/components/ui/Container";

const services = [
  {
    title: "Limpieza y mantenimiento industrial",
    description:
      "Servicios adaptados a entornos industriales y operativos.",
    href: "/servicios/limpieza-y-mantenimiento-industrial",
  },
  {
    title: "Higiene en espacios confinados",
    description:
      "Procedimientos específicos para trabajos en espacios confinados.",
    href: "/servicios/higiene-en-espacios-confinados",
  },
  {
    title: "Montaje y reparación de plantas de silos",
    description:
      "Mantenimiento y reparación de estructuras y plantas industriales.",
    href: "/servicios/montaje-y-reparacion-de-plantas-de-silos",
  },
  {
    title: "Limpieza de ductos y campanas industriales",
    description:
      "Limpieza especializada de sistemas de extracción y ventilación.",
    href: "/servicios/limpieza-de-ductos-y-campanas-industriales",
  },
];

export default function Services() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Servicios
          </p>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            Soluciones para empresas e industrias
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Brindamos servicios especializados de limpieza, mantenimiento e
            higiene industrial adaptados a distintos entornos operativos.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="rounded-3xl border border-gray-200 bg-white p-8 transition hover:border-[var(--primary)] hover:shadow-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-900">
                {service.title}
              </h3>

              <p className="mt-4 leading-relaxed text-gray-600">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
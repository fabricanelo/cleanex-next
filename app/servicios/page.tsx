const services = [
  {
    title: "Limpieza y mantenimiento industrial",
    href: "/servicios/limpieza-y-mantenimiento-industrial",
  },
  {
    title: "Higiene en espacios confinados",
    href: "/servicios/higiene-en-espacios-confinados",
  },
  {
    title: "Montaje y reparación de plantas de silos",
    href: "/servicios/montaje-y-reparacion-de-plantas-de-silos",
  },
  {
    title: "Limpieza de ductos y campanas industriales",
    href: "/servicios/limpieza-de-ductos-y-campanas-industriales",
  },
];

export default function ServiciosPage() {
  return (
    <main className="py-24">
      <section className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Servicios
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Nuestros servicios
        </h1>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {services.map((service) => (
            <a
              key={service.title}
              href={service.href}
              className="rounded-3xl border border-gray-200 p-8 transition hover:border-[var(--primary)] hover:shadow-lg"
            >
              <h2 className="text-2xl font-semibold">
                {service.title}
              </h2>

              <p className="mt-4 text-gray-600">
                Ver más información sobre este servicio.
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
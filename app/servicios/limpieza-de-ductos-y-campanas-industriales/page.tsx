export default function LimpiezaDuctosPage() {
  return (
    <main className="py-24">
      <section className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Servicios
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Limpieza de ductos y campanas industriales
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-600">
          Ofrecemos servicios de limpieza y mantenimiento de ductos,
          campanas y sistemas de extracción industrial, priorizando higiene,
          funcionamiento y seguridad operativa.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold">
              Limpieza especializada
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Aplicamos procedimientos específicos para sistemas de
              extracción y ventilación industrial.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold">
              Mantenimiento preventivo
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Ayudamos a mantener instalaciones limpias y operativas para
              reducir riesgos y mejorar el rendimiento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
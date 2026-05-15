export default function HigieneEspaciosConfinadosPage() {
  return (
    <main className="py-24">
      <section className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Servicios
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Higiene en espacios confinados
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-600">
          Brindamos servicios de higiene y limpieza en espacios confinados,
          aplicando procedimientos específicos orientados a la seguridad,
          control y mantenimiento de cada entorno operativo.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold">
              Protocolos de seguridad
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Trabajamos bajo procedimientos y medidas preventivas para
              garantizar operaciones seguras.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold">
              Equipamiento adecuado
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Utilizamos herramientas y elementos adaptados a trabajos en
              espacios confinados e industriales.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
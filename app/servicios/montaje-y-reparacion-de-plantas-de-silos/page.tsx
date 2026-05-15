export default function MontajeSilosPage() {
  return (
    <main className="py-24">
      <section className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Servicios
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Montaje y reparación de plantas de silos
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-600">
          Realizamos trabajos de montaje, reparación y mantenimiento de
          estructuras metálicas y plantas de silos, adaptándonos a las
          necesidades operativas de cada cliente.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold">
              Mantenimiento estructural
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Ejecutamos tareas de reparación y conservación de estructuras
              industriales y metálicas.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold">
              Soluciones industriales
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Trabajamos en proyectos orientados al mantenimiento y mejora
              de instalaciones industriales.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
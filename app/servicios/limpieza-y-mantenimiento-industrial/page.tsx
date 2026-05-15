export default function LimpiezaIndustrialPage() {
  return (
    <main className="py-24">
      <section className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Servicios
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Limpieza y mantenimiento industrial
        </h1>

        <p className="mt-8 max-w-4xl text-lg leading-relaxed text-gray-600">
          Realizamos tareas de limpieza y mantenimiento industrial adaptadas
          a distintos tipos de instalaciones, garantizando calidad,
          seguridad y eficiencia operativa.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold">
              Personal capacitado
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Contamos con personal preparado para trabajar en entornos
              industriales y operativos.
            </p>
          </div>

          <div className="rounded-3xl bg-gray-100 p-8">
            <h2 className="text-2xl font-semibold">
              Seguridad operativa
            </h2>

            <p className="mt-4 leading-relaxed text-gray-600">
              Aplicamos procedimientos de trabajo enfocados en seguridad y
              cumplimiento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
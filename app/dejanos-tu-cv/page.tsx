export default function DejanosTuCVPage() {
  return (
    <main className="py-24">
      <section className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Trabajá con nosotros
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Dejanos tu CV
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
          Si querés formar parte de nuestro equipo, completá tus datos y
          adjuntá tu currículum.
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-gray-50 p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Sumate a Cleanex
            </h2>

            <p className="mt-6 leading-relaxed text-gray-600">
              Buscamos personas comprometidas, responsables y con ganas de
              desarrollarse en tareas de limpieza, mantenimiento y servicios
              industriales.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Podés enviarnos tu CV y nos pondremos en contacto cuando haya
              oportunidades disponibles.
            </p>
          </div>

          <form className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="grid gap-5">
              <input
                className="rounded-xl border border-gray-300 px-4 py-3"
                type="text"
                required
                placeholder="Nombre y apellido"
              />

              <input
                className="rounded-xl border border-gray-300 px-4 py-3"
                type="email"
                required
                placeholder="Email"
              />

              <input
                className="rounded-xl border border-gray-300 px-4 py-3"
                type="tel"
                required
                placeholder="Teléfono"
              />

              <select
                    className="rounded-xl border border-gray-300 px-4 py-3 text-gray-700"
                    required
                    defaultValue=""
                >
                <option value="" disabled>
                Área de trabajo
                </option>

                <option value="marketing">
                Marketing
                </option>

                <option value="rrhh">
                 RRHH
                </option>

                <option value="limpieza-de-silos-y-mantenimiento">
                Limpieza de silos y mantenimiento
                </option>
             </select>

              <div className="grid gap-2">
                <label
                    htmlFor="cv"
                    className="text-sm font-medium text-gray-700"
                >
                    Adjuntar CV
                </label>

                <input
                    id="cv"
                    type="file"
                    required
                    className="
                        rounded-xl
                        border
                        border-gray-300
                        px-4
                        py-3
                        text-sm
                        text-gray-600
                        transition
                        hover:border-[var(--primary)]
                        hover:bg-gray-50
                        file:mr-4
                        file:rounded-full
                        file:border-0
                        file:bg-[var(--primary)]
                        file:px-4
                        file:py-2
                        file:text-sm
                        file:font-semibold
                        file:text-white
                        hover:file:bg-[var(--primary-dark)]
                        "
                />
</div>

              <textarea
                className="min-h-32 rounded-xl border border-gray-300 px-4 py-3"
                placeholder="Mensaje adicional"
              />

              <button
                className="rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--primary-dark)]"
                type="submit"
              >
                Enviar CV
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
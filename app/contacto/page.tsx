export default function ContactoPage() {
  return (
    <main className="py-24">
      <section className="mx-auto max-w-7xl px-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
          Contacto
        </p>

        <h1 className="mt-4 text-5xl font-bold text-gray-900">
          Comunicate con Cleanex
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-gray-600">
          Solicitá asesoramiento o presupuesto para servicios de limpieza,
          mantenimiento industrial o higiene en espacios confinados.
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-gray-50 p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Datos de contacto
            </h2>

            <div className="mt-6 space-y-4 text-gray-700">
              <p>
                <strong>Administracion:</strong> administracion@cleanexargentina.com
              </p>

              <p>
                <strong>Teléfono:</strong> +54 9 3416 88-8634
              </p>

              <p>
                <strong>Seguridad, higiene y medio ambiente:</strong> shyma@cleanexargentina.com
              </p>

              <p>
                <strong>Teléfono:</strong> +54 9 3416 684 9364
              </p>

              <p>
                <strong>Ubicación:</strong> Hipolito Yrigoyen 1070, S2600 Venado Tuerto, Santa Fe
              </p>
            </div>
          </div>

          <form className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="grid gap-5">
              <input
                className="rounded-xl border border-gray-300 px-4 py-3"
                type="text"
                placeholder="Nombre y apellido"
              />

              <input
                className="rounded-xl border border-gray-300 px-4 py-3"
                type="email"
                placeholder="Email"
              />

              <input
                className="rounded-xl border border-gray-300 px-4 py-3"
                type="tel"
                placeholder="Teléfono"
              />

              <textarea
                className="min-h-36 rounded-xl border border-gray-300 px-4 py-3"
                placeholder="Mensaje"
              />

              <button
                className="rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--primary-dark)]"
                type="submit"
              >
                Enviar consulta
              </button>
            </div>
          </form>
        </div>
      </section>
    </main>
  );
}
import PageHeader from "@/components/ui/PageHeader";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { IconMail, IconPhone } from "@/components/ui/Icon";
import { WHATSAPP } from "@/lib/contacto-data";

export default function ContactoPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Contacto"
        title="Dejanos tu consulta"
        description="Completá el formulario para que nos pongamos en contacto con vos a la brevedad."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="rounded-3xl bg-gray-50 p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Administración
              </h2>
              <div className="mt-4 space-y-2 text-gray-700">
                <a
                  href="mailto:administracion@cleanexargentina.com"
                  className="flex items-center gap-2 transition hover:text-[var(--primary-dark)]"
                >
                  <IconMail className="h-4 w-4 shrink-0" />
                  administracion@cleanexargentina.com
                </a>
                <a
                  href={WHATSAPP.administracionYLimpiezaSilos}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-[var(--primary-dark)]"
                >
                  <IconPhone className="h-4 w-4 shrink-0" />
                  +54 9 3416 88-8634
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Seguridad, Higiene y Medio Ambiente
              </h2>
              <div className="mt-4 space-y-2 text-gray-700">
                <a
                  href="mailto:shyma@cleanexargentina.com"
                  className="flex items-center gap-2 transition hover:text-[var(--primary-dark)]"
                >
                  <IconMail className="h-4 w-4 shrink-0" />
                  shyma@cleanexargentina.com
                </a>
                <a
                  href={WHATSAPP.seguridadHigieneYMedioAmbiente}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 transition hover:text-[var(--primary-dark)]"
                >
                  <IconPhone className="h-4 w-4 shrink-0" />
                  +54 9 3416 684-9364
                </a>
              </div>
            </div>

            <div className="rounded-3xl bg-gray-50 p-8">
              <h2 className="text-xl font-bold text-gray-900">
                Urgencias en silos
              </h2>
              <div className="mt-4 space-y-3 text-gray-700">
                <div>
                  <p className="text-sm text-gray-500">Limpieza de silos</p>
                  <a
                    href={WHATSAPP.administracionYLimpiezaSilos}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-semibold transition hover:text-[var(--primary-dark)]"
                  >
                    <IconPhone className="h-4 w-4 shrink-0" />
                    +54 9 341 688-8634
                  </a>
                </div>
                <div>
                  <p className="text-sm text-gray-500">
                    Reparación de plantas de silos
                  </p>
                  <a
                    href={WHATSAPP.reparacionPlantas}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 font-semibold transition hover:text-[var(--primary-dark)]"
                  >
                    <IconPhone className="h-4 w-4 shrink-0" />
                    +54 9 3462 675-677
                  </a>
                </div>
              </div>
            </div>

            <p className="text-sm text-gray-500">
              <strong className="text-gray-700">Ubicación:</strong> Hipólito
              Yrigoyen 1070, S2600 Venado Tuerto, Santa Fe
            </p>
          </div>

          <form
            name="contacto"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            action="/gracias"
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <input type="hidden" name="form-name" value="contacto" />
            <p className="hidden">
              <label>
                No completar: <input name="bot-field" />
              </label>
            </p>

            <div className="grid gap-5">
              <input
                className="rounded-xl border border-gray-300 px-4 py-3"
                type="text"
                name="nombre"
                placeholder="Nombre y Apellido"
                required
              />

              <input
                className="rounded-xl border border-gray-300 px-4 py-3"
                type="email"
                name="email"
                placeholder="E-mail"
                required
              />

              <select
                className="rounded-xl border border-gray-300 px-4 py-3 text-gray-700"
                name="area"
                required
                defaultValue=""
              >
                <option value="" disabled>
                  Área
                </option>
                <option value="Propuesta Comercial">Propuesta Comercial</option>
                <option value="Presupuesto">Presupuesto</option>
                <option value="Otro">Otro</option>
              </select>

              <textarea
                className="min-h-36 rounded-xl border border-gray-300 px-4 py-3"
                name="mensaje"
                placeholder="Dejanos tu Mensaje"
                required
              />

              <button
                className="rounded-full bg-[var(--primary)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--primary-dark)]"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>

        <div className="mt-16 rounded-3xl bg-gray-50 p-10 text-center">
          <h2 className="text-xl font-bold text-gray-900">
            Inscribite a nuestro Newsletter
          </h2>
          <p className="mx-auto mt-2 max-w-md text-gray-600">
            Enterate todas nuestras novedades dejando tus datos en el
            formulario.
          </p>
          <div className="mx-auto mt-6 max-w-md">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}

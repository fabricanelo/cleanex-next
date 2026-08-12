import PageHeader from "@/components/ui/PageHeader";
import { IconPaperclip } from "@/components/ui/Icon";

export default function DejanosTuCVPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Trabajá con nosotros"
        title="Dejanos tu CV"
        description="Completá el formulario con tus datos personales y tu CV para posibles búsquedas activas que tenemos en la empresa y pronto nos pondremos en contacto con vos."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl bg-gray-50 p-8">
            <h2 className="text-2xl font-semibold text-gray-900">
              Formá parte de Cleanex
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

          <form
            name="dejanos-tu-cv"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            encType="multipart/form-data"
            action="/gracias"
            className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <input type="hidden" name="form-name" value="dejanos-tu-cv" />
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
                placeholder="Tu nombre"
                required
              />

              <input
                className="rounded-xl border border-gray-300 px-4 py-3"
                type="email"
                name="email"
                placeholder="Tu correo electrónico"
                required
              />

              <input
                className="rounded-xl border border-gray-300 px-4 py-3"
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                required
              />

              <div className="grid gap-2">
                <label
                  htmlFor="area"
                  className="text-sm font-medium text-gray-700"
                >
                  Área de trabajo (podés elegir más de una)
                </label>

                <select
                  id="area"
                  name="area"
                  multiple
                  size={5}
                  required
                  className="rounded-xl border border-gray-300 px-4 py-3 text-gray-700"
                >
                  <option value="Administración">Administración</option>
                  <option value="Marketing">Marketing</option>
                  <option value="RRHH">RRHH</option>
                  <option value="Limpieza de Silos">Limpieza de Silos</option>
                  <option value="Mantenimiento">Mantenimiento</option>
                </select>
              </div>

              <div className="grid gap-2">
                <label
                  htmlFor="cv"
                  className="flex items-center gap-2 text-sm font-medium text-gray-700"
                >
                  <IconPaperclip className="h-4 w-4" />
                  Carga tu CV
                </label>

                <input
                  id="cv"
                  name="cv"
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

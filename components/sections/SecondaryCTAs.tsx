import Container from "@/components/ui/Container";
import { IconArrowRight, IconMail, IconPaperclip } from "@/components/ui/Icon";

export default function SecondaryCTAs() {
  return (
    <section className="py-24">
      <Container>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-gray-200 bg-white p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary-dark)]">
              <IconMail className="h-6 w-6" />
            </span>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Nuestro brochure
            </h3>

            <p className="mt-3 leading-relaxed text-gray-600">
              Podés pedirnos nuestro brochure y conocer más sobre Cleanex
              Argentina.
            </p>

            <a
              href="mailto:info@cleanexargentina.com"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--primary-dark)] transition hover:gap-3"
            >
              Solicitalo
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white p-10">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--secondary)] text-[var(--primary-dark)]">
              <IconPaperclip className="h-6 w-6" />
            </span>

            <h3 className="mt-6 text-2xl font-bold text-gray-900">
              Formá parte de Cleanex
            </h3>

            <p className="mt-3 leading-relaxed text-gray-600">
              Envianos tu CV para una posible búsqueda en nuestra empresa.
            </p>

            <a
              href="/dejanos-tu-cv"
              className="mt-6 inline-flex items-center gap-2 font-semibold text-[var(--primary-dark)] transition hover:gap-3"
            >
              Envianos tu CV
              <IconArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

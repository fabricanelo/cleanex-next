import Image from "next/image";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { IconFacebook, IconInstagram } from "@/components/ui/Icon";

const headingClassName =
  "text-sm font-bold uppercase tracking-[0.15em] text-gray-900";

const socialClassName =
  "flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition hover:bg-[var(--primary)] hover:text-white";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-100">
      <Container className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1.3fr] lg:gap-8">
        <div>
          <Image
            src="/logos/cleanex-logo.svg"
            alt="Cleanex Argentina"
            width={220}
            height={80}
            className="h-auto w-[180px]"
          />

          <p className="mt-4 max-w-xs text-sm leading-relaxed text-gray-600">
            Limpieza de espacios confinados, higiene general, mantenimiento y
            montaje industrial.
          </p>

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.facebook.com/cleanexargentina/"
              target="_blank"
              rel="noreferrer"
              aria-label="Seguir en Facebook"
              className={socialClassName}
            >
              <IconFacebook className="h-4 w-4" />
            </a>

            <a
              href="https://www.instagram.com/cleanex_argentina/"
              target="_blank"
              rel="noreferrer"
              aria-label="Seguir en Instagram"
              className={socialClassName}
            >
              <IconInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className={headingClassName}>Contactenos</h3>

          <div className="mt-4 space-y-2 text-sm text-gray-700">
            <a
              href="mailto:info@cleanexargentina.com"
              className="block break-words underline transition hover:text-[var(--primary-dark)]"
            >
              info@cleanexargentina.com
            </a>

            <p>
              <span className="block font-semibold">
                Oficina Administrativa:
              </span>
              <a
                href="tel:+5493416888634"
                className="font-bold transition hover:text-[var(--primary-dark)]"
              >
                +54 9 341 688-8634
              </a>
            </p>

            <p>
              <span className="block font-semibold">Horarios de atención:</span>
              Lunes a Viernes: 09 a 18 hs.
              <br />
              Sábado: Cerrado
            </p>
          </div>
        </div>

        <div>
          <h3 className={headingClassName}>Ubicación</h3>

          <address className="mt-4 text-sm not-italic leading-relaxed text-gray-700">
            Hipólito Yrigoyen 1070, S2600
            <br />
            Venado Tuerto, Santa Fe
          </address>

          <a
            href="https://www.google.com/maps/place/Cleanex+Argentina/@-33.746494,-61.970444,13z/data=!4m6!3m5!1s0x95b7ab10d77fff53:0x129f556f7f532f90!8m2!3d-33.7464942!4d-61.9704444!16s%2Fg%2F11hdpyv733"
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-block text-sm font-semibold text-gray-700 underline transition hover:text-[var(--primary-dark)]"
          >
            Ver en Google Maps
          </a>
        </div>

        <div>
          <h3 className={headingClassName}>Suscribite al newsletter</h3>

          <p className="mt-4 text-sm text-gray-600">
            Enterate todas nuestras novedades.
          </p>

          <div className="mt-4">
            <NewsletterForm stacked />
          </div>
        </div>
      </Container>

      <div className="border-t border-gray-200">
        <Container className="flex flex-col gap-1 py-4 text-xs font-medium text-gray-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Cleanex Argentina. Todos los derechos
            reservados.
          </p>
          <p>
            Developed &amp; Quality Assured by{" "}
            <a
              href="https://focus-qa.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-gray-700 underline-offset-2 transition hover:text-[var(--primary-dark)] hover:underline"
            >
              Focus QA
            </a>
          </p>
        </Container>
      </div>
    </footer>
  );
}

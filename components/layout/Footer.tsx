import Image from "next/image";
import Container from "@/components/ui/Container";
import NewsletterForm from "@/components/forms/NewsletterForm";
import { IconFacebook, IconInstagram } from "@/components/ui/Icon";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-100">
      <Container className="grid gap-10 py-12 md:grid-cols-4 md:items-start">
        <div>
          <Image
            src="/logos/cleanex-logo.svg"
            alt="Cleanex Argentina"
            width={220}
            height={80}
            className="h-auto w-[220px]"
          />

          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://www.facebook.com/cleanexargentina/"
              target="_blank"
              rel="noreferrer"
              aria-label="Seguir en Facebook"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition hover:bg-[var(--primary)] hover:text-white"
            >
              <IconFacebook className="h-4 w-4" />
            </a>

            <a
              href="https://www.instagram.com/cleanex_argentina/"
              target="_blank"
              rel="noreferrer"
              aria-label="Seguir en Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 text-gray-700 transition hover:bg-[var(--primary)] hover:text-white"
            >
              <IconInstagram className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900">
            Contactenos
          </h3>

          <div className="mt-5 space-y-3 text-sm text-gray-700">
            <a
              href="mailto:info@cleanexargentina.com"
              className="block underline transition hover:text-[var(--primary-dark)]"
            >
              info@cleanexargentina.com
            </a>

            <p className="font-semibold">Oficina Administrativa:</p>

            <a
              href="tel:+5493416888634"
              className="block font-bold transition hover:text-[var(--primary-dark)]"
            >
              +54 9 341 688-8634
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900">
            Horarios de atención
          </h3>

          <div className="mt-5 space-y-3 text-sm text-gray-700">
            <p>Lunes a Viernes: 09 a 18 hs.</p>
            <p>Sábado: Cerrado</p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900">
            Ubicación
          </h3>

          <div className="mt-5 overflow-hidden rounded-2xl border border-gray-300">
             <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13175.324589236748!2d-61.9704444!3d-33.7464942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95b7ab10d77fff53%3A0x129f556f7f532f90!2sCleanex%20Argentina!5e0!3m2!1ses!2sar!4v1747334500000"
                width="100%"
                height="100"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <a
            href="https://www.google.com/maps/place/Cleanex+Argentina/@-33.746494,-61.970444,13z/data=!4m6!3m5!1s0x95b7ab10d77fff53:0x129f556f7f532f90!8m2!3d-33.7464942!4d-61.9704444!16s%2Fg%2F11hdpyv733"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm font-semibold text-gray-700 underline transition hover:text-[var(--primary-dark)]"
          >
            Ver en Google Maps
          </a>
        </div>
      </Container>

      <div className="border-t border-gray-200 bg-white py-10">
        <Container className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-[0.15em] text-gray-900">
              Suscribite al newsletter
            </h3>
            <p className="mt-1 text-sm text-gray-600">
              Enterate todas nuestras novedades.
            </p>
          </div>

          <div className="w-full md:max-w-md">
            <NewsletterForm />
          </div>
        </Container>
      </div>

      <div className="mt-2 bg-gray-300 py-3">
        <Container className="flex flex-col gap-2 text-xs font-medium text-gray-700 md:flex-row md:items-center md:justify-between">
          <p>Cleanex Argentina © Todos los derechos reservados</p>
          <p>{new Date().getFullYear()}</p>
          <p className="text-gray-600">
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
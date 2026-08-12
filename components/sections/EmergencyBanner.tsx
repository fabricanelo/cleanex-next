import Container from "@/components/ui/Container";
import { IconPhone } from "@/components/ui/Icon";
import { WHATSAPP } from "@/lib/contacto-data";

export default function EmergencyBanner() {
  return (
    <section className="bg-gray-900 py-8">
      <Container className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--primary)] text-gray-900">
            <IconPhone className="h-5 w-5" />
          </span>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Urgencias
          </p>
        </div>

        <div className="grid gap-4 text-white sm:grid-cols-2 lg:gap-10">
          <a
            href={WHATSAPP.administracionYLimpiezaSilos}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[var(--primary)]"
          >
            <span className="block text-xs uppercase tracking-wide text-white/60">
              Limpieza de silos
            </span>
            <span className="font-semibold">+54 9 341 688-8634</span>
          </a>

          <a
            href={WHATSAPP.reparacionPlantas}
            target="_blank"
            rel="noreferrer"
            className="transition hover:text-[var(--primary)]"
          >
            <span className="block text-xs uppercase tracking-wide text-white/60">
              Reparación de plantas de silos
            </span>
            <span className="font-semibold">+54 9 3462 675-677</span>
          </a>
        </div>

        <a
          href="/contacto"
          className="inline-flex justify-center rounded-full bg-[var(--primary)] px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-[var(--primary-dark)] hover:text-white"
        >
          Contactarse
        </a>
      </Container>
    </section>
  );
}

import Image from "next/image";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Cleanex Argentina
            </p>

            <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl">
              Limpieza de espacios confinados y montaje industrial
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-600">
              Brindamos servicios a industrias: limpieza profesional de
              espacios confinados, higiene general, mantenimiento y montaje
              industrial.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href="/contacto">Solicitar presupuesto</Button>
              <Button href="/servicios" variant="secondary">
                Ver servicios
              </Button>
            </div>
          </div>

          <Image
            src="/images/hero/generales-19.jpg"
            alt="Operarios de Cleanex Argentina en tareas de limpieza industrial"
            width={1808}
            height={704}
            priority
            className="h-[420px] w-full rounded-3xl object-cover object-right shadow-lg"
          />
        </div>
      </Container>
    </section>
  );
}

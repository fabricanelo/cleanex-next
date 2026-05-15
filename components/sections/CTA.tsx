import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function CTA() {
  return (
    <section className="bg-[var(--primary)] py-24">
      <Container>
        <div className="flex flex-col items-start justify-between gap-10 rounded-3xl bg-[var(--primary-dark)] p-10 lg:flex-row lg:items-center lg:p-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-200">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-white">
              Solicite un presupuesto adaptado a su empresa
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-blue-100">
              Nuestro equipo está preparado para brindar soluciones
              profesionales de limpieza y mantenimiento según las
              necesidades de cada cliente.
            </p>
          </div>

          <Button variant="light">Contactar ahora</Button>
        </div>
      </Container>
    </section>
  );
}
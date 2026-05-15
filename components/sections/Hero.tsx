import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function Hero() {
  return (
    <section className="flex min-h-[85vh] items-center bg-white">
      <Container>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
            Cleanex Argentina
          </p>

          <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-7xl">
            Servicios profesionales de limpieza para empresas e industrias
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-gray-600">
            Soluciones integrales de limpieza profesional con atención
            personalizada, mantenimiento y compromiso con la calidad.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button>Solicitar presupuesto</Button>
            <Button variant="secondary">Ver servicios</Button>

            
          </div>
        </div>
      </Container>
    </section>
  );
}
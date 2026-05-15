import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function ContactPreview() {
  return (
    <section className="bg-gray-50 py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--primary)]">
              Contacto
            </p>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Hablemos sobre las necesidades de limpieza de su empresa
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              Contactanos para recibir asesoramiento y coordinar una propuesta
              adaptada a tu espacio, operación y frecuencia de servicio.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="space-y-5 text-gray-700">
              <p>
                <strong>Teléfono:</strong> [Dato real]
              </p>

              <p>
                <strong>Email:</strong> [Dato real]
              </p>

              <p>
                <strong>Ubicación:</strong> Buenos Aires, Argentina
              </p>

              <Button>Solicitar presupuesto</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
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
                <strong>Administración:</strong> +54 9 3416 88-8634
              </p>

              <p>
                <strong>Email:</strong> info@cleanexargentina.com
              </p>

              <p>
                <strong>Ubicación:</strong> Hipólito Yrigoyen 1070, S2600
                Venado Tuerto, Santa Fe
              </p>

              <Button href="/contacto">Solicitar presupuesto</Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
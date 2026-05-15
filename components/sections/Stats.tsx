import Container from "@/components/ui/Container";

const stats = [
  {
    value: "+10",
    label: "Años de experiencia",
  },
  {
    value: "+100",
    label: "Servicios realizados",
  },
  {
    value: "24/7",
    label: "Atención y soporte",
  },
  {
    value: "100%",
    label: "Compromiso con la calidad",
  },
];

export default function Stats() {
  return (
    <section className="bg-[var(--primary)] py-20">
      <Container>
        <div className="grid gap-10 text-center md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-5xl font-bold text-white">
                {stat.value}
              </h3>

              <p className="mt-3 text-sm font-medium uppercase tracking-wide text-white/80">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
import Container from "@/components/ui/Container";

const stats = [
  {
    value: "30",
    label: "Años de experiencia en el rubro metalúrgico",
  },
  {
    value: "+10",
    label: "Años en limpieza profesional de silos",
  },
];

export default function Stats() {
  return (
    <section className="bg-[var(--primary)] py-20">
      <Container>
        <div className="grid gap-10 text-center sm:grid-cols-2">
          {stats.map((stat) => (
            <div key={stat.label}>
              <h3 className="text-6xl font-bold text-white">{stat.value}</h3>

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

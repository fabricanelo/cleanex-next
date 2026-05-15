import PageHeader from "@/components/ui/PageHeader";

export default function EmpresaPage() {
  return (
    <main>
      <PageHeader
        eyebrow="Empresa"
        title="Cleanex Argentina"
        description="Nuestro trabajo está enfocado principalmente en labores de limpieza profesional de espacios confinados, tareas de higiene general, mantenimiento y montaje."
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900">
            Compromiso, experiencia y calidad en cada servicio
          </h2>

          <p className="mt-6 leading-relaxed text-gray-600">
            Brindamos soluciones para empresas e industrias, adaptándonos a las
            necesidades operativas de cada cliente.
          </p>
        </div>
      </section>
    </main>
  );
}
import ServiceDetail from "@/components/sections/ServiceDetail";

export default function LimpiezaYMantenimientoIndustrialPage() {
  return (
    <ServiceDetail
      title="Limpieza y mantenimiento industrial"
      sections={[
        {
          paragraphs: [
            "Hoy en día y de forma progresiva se les exige a las industrias cumplir con diversas normas de seguridad, higiene y medio ambiente en sus instalaciones. CLEANEX contribuye brindando diferentes servicios de higiene industrial como:",
          ],
          list: [
            "Hidro-lavados en distintas superficies",
            "Lustrado y encerado",
            "Limpieza de baños y vestuarios",
            "Lavado de vidrios y ventanales",
            "Higiene en depósitos",
            "Higiene en comedores",
            "Limpieza de oficinas, salas de reuniones y conferencias",
            "Limpieza de canaletas",
            "Limpieza de planta e instalaciones en general",
            "Entre otros",
          ],
        },
        {
          paragraphs: [
            "También contamos con personal calificado para realizar tareas generales de mantenimiento industrial, fundamentales para contrarrestar el desgaste natural que afecta a las instalaciones o bien son demandadas por la misma operatividad de la planta, como:",
          ],
          list: [
            "Hidro-lavados en distintas superficies",
            "Reparación y cambio de canaletas",
            "Tareas de albañilería",
            "Mantenimiento de tableros eléctricos",
            "Colocación de vidrios",
            "Pintura",
            "Mantenimiento de espacios verdes",
            "Personal eventual para tareas puntuales",
            "Entre otros",
          ],
        },
      ]}
      images={[
        { src: "/images/gallery/limpieza-industrial/21.jpg", alt: "Limpieza industrial" },
        { src: "/images/gallery/limpieza-industrial/27.jpg", alt: "Limpieza industrial" },
        { src: "/images/gallery/limpieza-industrial/20.jpg", alt: "Limpieza industrial" },
        { src: "/images/gallery/limpieza-industrial/23.jpg", alt: "Limpieza industrial" },
        { src: "/images/gallery/limpieza-industrial/16.jpg", alt: "Limpieza industrial" },
        { src: "/images/gallery/limpieza-industrial/10.jpg", alt: "Limpieza industrial" },
        { src: "/images/gallery/limpieza-industrial/14.jpg", alt: "Limpieza industrial" },
      ]}
    />
  );
}

export interface Novedad {
  slug: string;
  titulo: string;
  fecha: string;
  resumen: string;
  cuerpo: string[];
}

export const novedades: Novedad[] = [
  {
    slug: "nuevo-sitio-web",
    titulo: "Nuevo Sitio WEB",
    fecha: "2021-12-03",
    resumen:
      "Cleanex Argentina ha renovado su sitio web para brindar a sus clientes un mejor servicio e información.",
    cuerpo: [
      "Cleanex Argentina ha renovado su sitio web para brindar a sus clientes un mejor servicio e información. Invitamos a todos a recorrerlo y mantenerse mensualmente informados suscribiéndose al Newsletter.",
      "Para más información: cleanexargentina.com/contacto",
    ],
  },
];

export function getNovedad(slug: string) {
  return novedades.find((novedad) => novedad.slug === slug);
}

export function formatFecha(fecha: string) {
  const [year, month, day] = fecha.split("-").map(Number);
  return new Date(year, month - 1, day).toLocaleDateString("es-AR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

import { encuestaClientesUrl } from "@/lib/site-config";

// Un bloque del cuerpo es un párrafo o una lista con viñetas.
export type BloqueCuerpo = string | { lista: string[] };

export interface Novedad {
  slug: string;
  titulo: string;
  fecha: string;
  resumen: string;
  cuerpo: BloqueCuerpo[];
  // Fijada en primera posición, sin importar su fecha.
  fijada?: boolean;
  // Reemplaza el texto "Novedades" sobre el título en la vista de detalle.
  etiqueta?: string;
  // Llamado a la acción externo. Sin `url` se muestra deshabilitado.
  cta?: {
    texto: string;
    nota?: string;
    url?: string;
  };
}

const listado: Novedad[] = [
  {
    slug: "ayudanos-a-mejorar-nuestros-servicios",
    titulo: "Ayudanos a mejorar nuestros servicios",
    fecha: "2026-10-28",
    fijada: true,
    etiqueta: "Novedad destacada",
    resumen:
      "En Cleanex queremos seguir creciendo junto a nuestros clientes. Estamos evaluando incorporar nuevos servicios y nos gustaría conocer qué necesidades tiene tu empresa.",
    cuerpo: [
      "En Cleanex creemos que la mejor manera de seguir mejorando es escuchar a quienes confían en nosotros.",
      "Por eso, estamos evaluando ampliar nuestros servicios para ofrecer nuevas soluciones de limpieza, mantenimiento y mejoras edilicias.",
      "Algunas de las posibilidades que estamos analizando incluyen:",
      {
        lista: [
          "Limpieza de paneles solares.",
          "Pequeñas construcciones y ampliaciones.",
          "Nuevos servicios de refacciones y mantenimiento.",
          "Otras soluciones que nuestros clientes puedan necesitar.",
        ],
      },
      "Queremos conocer tu opinión.",
      "Preparamos una breve encuesta para que puedas contarnos qué servicios serían útiles para tu empresa y qué necesidades te gustaría que pudiéramos ayudarte a resolver.",
      "Tu participación nos ayudará a identificar oportunidades de mejora y seguir creciendo juntos.",
    ],
    cta: {
      texto: "Responder encuesta",
      nota: "Te llevará menos de 2 minutos.",
      url: encuestaClientesUrl,
    },
  },
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

// Fijadas primero; dentro de cada grupo, de la más reciente a la más antigua.
// Las fechas son ISO (AAAA-MM-DD), así que se comparan como texto.
export const novedades: Novedad[] = [...listado].sort(
  (a, b) =>
    Number(Boolean(b.fijada)) - Number(Boolean(a.fijada)) ||
    b.fecha.localeCompare(a.fecha),
);

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

// URL de la encuesta de clientes (Google Forms) que usa el CTA de Novedades.
// Se configura con NEXT_PUBLIC_CLEANEX_SURVEY_URL (ver README). Como el sitio
// se exporta estático, el valor queda fijo al momento de `next build`.
function urlHttps(valor: string | undefined) {
  if (!valor) return undefined;

  try {
    const url = new URL(valor.trim());
    return url.protocol === "https:" ? url.toString() : undefined;
  } catch {
    return undefined;
  }
}

// undefined si no está configurada o no es una URL https válida: el CTA se
// muestra deshabilitado en lugar de generar un enlace roto.
export const encuestaClientesUrl = urlHttps(
  process.env.NEXT_PUBLIC_CLEANEX_SURVEY_URL,
);

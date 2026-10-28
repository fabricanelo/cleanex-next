This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## Encuesta de clientes (Novedades)

La novedad fijada "Ayudanos a mejorar nuestros servicios" tiene un botón
"Responder encuesta" que abre un Google Form en una pestaña nueva. La URL no
está en el código: se lee de la variable `NEXT_PUBLIC_CLEANEX_SURVEY_URL`
(`lib/site-config.ts`). Si falta o no es una URL `https://` válida, el botón
se muestra deshabilitado.

1. **Dónde configurarla.** En desarrollo, en `.env.local` (copiar
   `.env.example`). En Netlify (hosting actual), en `[build.environment]` de
   `netlify.toml`. En Vercel, en *Settings → Environment Variables*.
2. **Cómo reemplazarla.** Cambiar el valor de la variable por el enlace del
   formulario definitivo de Cleanex (*Enviar → Enlace* en Google Forms, con el
   formato `https://docs.google.com/forms/d/e/<ID>/viewform`). No hace falta
   tocar componentes.
3. **Configuración en Vercel.** Crear `NEXT_PUBLIC_CLEANEX_SURVEY_URL` para los
   entornos *Production* (y *Preview* si se quiere probar ahí). El sitio se
   exporta estático y el valor se incrusta durante `next build`: después de
   crear o cambiar la variable hay que **volver a desplegar**.
4. **Cómo verificarlo.** Abrir `/novedades/ayudanos-a-mejorar-nuestros-servicios`
   en el sitio publicado, comprobar que el botón esté activo, que apunte al
   formulario correcto y que abra en una pestaña nueva. El formulario debe
   aceptar respuestas sin pedir iniciar sesión en una cuenta de Cleanex.

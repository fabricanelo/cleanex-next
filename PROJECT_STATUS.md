# Cleanex Argentina - Project Status

## Objective

Rebuild the existing Cleanex Argentina website using Next.js while preserving
the identity and general structure of the original website.

This is NOT a complete redesign.

The goal is to modernize:
- UI
- UX
- responsiveness
- performance
- codebase
- maintainability

while preserving:
- Cleanex branding
- original color palette
- original services
- original content where applicable
- general website structure

Original website:
https://cleanexargentina.com/

## Tech Stack

- Next.js
- TypeScript
- Tailwind CSS
- App Router
- Netlify
- GitHub

## Current Pages

- /
- /empresa
- /servicios
- /contacto
- /dejanos-tu-cv

### Service pages

- /servicios/limpieza-y-mantenimiento-industrial
- /servicios/higiene-en-espacios-confinados
- /servicios/montaje-y-reparacion-de-plantas-de-silos
- /servicios/limpieza-de-ductos-y-campanas-industriales

## Existing Components

Layout:
- Navbar
- Footer

UI:
- Container
- Button
- PageHeader

Sections:
- Hero
- Services
- About
- CTA
- ContactPreview
- Stats

## Branding

CSS variables are defined in globals.css.

Important:
Do NOT replace the Cleanex palette with a generic modern palette.

The visual modernization must respect the existing brand identity.

## Assets

Cleanex logos are stored under:

public/logos/

Website images are stored under:

public/images/

Use existing assets whenever appropriate.

## Footer

Footer currently contains:

- Cleanex logo
- Contact information
- Business hours
- Embedded Google Maps location
- Copyright

Newsletter/subscription functionality from the old website is intentionally
NOT being carried over.

## Contact

/contacto currently contains a visual contact form.

The form is NOT connected to a backend yet.

## CV

/dejanos-tu-cv contains:

- Name
- Email
- Phone
- Work area dropdown
- CV upload
- Additional message

Work areas:

- Marketing
- RRHH
- Limpieza de silos y mantenimiento

All fields are required.

The form is NOT connected to a backend yet.

## Deployment

The project is deployed on Netlify.

Netlify is connected to GitHub.

Next.js is currently configured for static export for the Netlify deployment.

Do not modify deployment configuration without first understanding the
current setup.

## Next priorities

1. Review and improve Home while respecting original Cleanex structure.
2. Recover/adapt missing content from the original website.
3. Add real Cleanex images.
4. Improve Empresa page.
5. Improve individual service pages.
6. Add Clientes / Galería / other original sections where appropriate.
7. Make Contact form functional.
8. Make CV submission functional, including file upload.
9. Responsive/mobile improvements.
10. SEO and metadata.
11. Accessibility review.
12. Final production QA.

## Important development rule

Before implementing large structural or design changes:

1. Inspect the existing repository.
2. Inspect the original Cleanex website.
3. Determine whether the proposed change preserves the original site's intent.
4. Avoid inventing services, statistics, company claims, certifications,
   years of experience or other business information that has not been
   confirmed.

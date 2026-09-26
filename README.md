# landing-serverlessscanner

Sitio estático de portfolio para [Serverless Scanner](https://github.com/LorenGrz/ServerlessScanner) — una herramienta que analiza infraestructura SaaS y genera un roadmap de migración a AWS serverless con estimación de ROI.

No tiene servidor ni llamadas a API. Es una landing que explica el proyecto, muestra una captura real de la app y enlaza al repositorio (la app ya no está desplegada).

## Stack

- Next.js 16 (App Router, `output: 'export'`)
- Tailwind CSS
- TypeScript

## Desarrollo local

```bash
npm install
npm run dev
# http://localhost:3000
```

## Build y deploy

```bash
npm run build   # genera ./out
```

Deploy automático a GitHub Pages vía GitHub Actions en cada push a `master`.

**URL en vivo:** https://lorengrz.github.io/landing-serverlessscanner/

## Proyecto relacionado

- App principal: [LorenGrz/ServerlessScanner](https://github.com/LorenGrz/ServerlessScanner)

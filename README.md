# Web-CODES

Sitio web de [CODES-UNLU](https://github.com/CODES-UNLU), construido con
[Astro](https://astro.build).

- **Repositorio:** https://github.com/CODES-UNLU/Web-CODES
- **Sitio publicado:** https://codes-unlu.github.io/Web-CODES/

## Requisitos

- Node.js `>= 22.12.0`
- [pnpm](https://pnpm.io) (único gestor de paquetes permitido)

## Comandos

| Comando            | Acción                                              |
| :----------------- | :-------------------------------------------------- |
| `pnpm install`     | Instala las dependencias                            |
| `pnpm dev`         | Levanta el servidor de desarrollo en `localhost:4321` |
| `pnpm build`       | Genera el sitio de producción en `./dist/`          |
| `pnpm preview`     | Previsualiza el build localmente                    |
| `pnpm astro ...`   | Ejecuta comandos de la CLI de Astro                 |

> El dev server se puede levantar en segundo plano con `pnpm dev --background`
> y administrar con `pnpm dev stop`, `pnpm dev status` y `pnpm dev logs`.

## Estructura

```text
/
├── public/              # Assets estáticos (se copian tal cual)
├── src/
│   └── pages/           # Rutas: cada archivo es una página
│       └── index.astro
├── .github/workflows/   # CI/CD (deploy a GitHub Pages)
└── package.json
```

## Deploy

El deploy es automático: cada push a `main` dispara el workflow
`.github/workflows/deploy.yml`, que construye el sitio con el
[Astro Action oficial](https://github.com/withastro/action) y lo publica en
GitHub Pages.

- URL de producción: https://codes-unlu.github.io/Web-CODES/
- El `site` y el `base` correspondientes están definidos en `astro.config.mjs`.

## Convenciones

- **Solo pnpm** para instalar dependencias y correr scripts.
- **Conventional Commits en español** (ej.: `feat(nav): agrega menú responsive`).
- Los finales de línea se normalizan a **LF** vía `.gitattributes` /
  `.editorconfig`; los editores ya incluyen la configuración recomendada en
  `.vscode/`.

Ver [`AGENTS.md`](./AGENTS.md) para el detalle de las reglas.

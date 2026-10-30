# Web-CODES

Sitio web oficial de **CODES** (Centro Organizado de Estudiantes de Sistemas de la
Universidad Nacional de Luján), construido con [Astro](https://astro.build).

- **Repositorio:** https://github.com/CODES-UNLU/Web-CODES
- **Sitio publicado:** https://codesunlu.com.ar/
- **Organización:** https://github.com/CODES-UNLU
- **Redes:** https://link.codesunlu.com.ar/

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

- URL de producción: https://codesunlu.com.ar/
- El `site` está definido en `astro.config.mjs`. Como el sitio se sirve desde la
  raíz del dominio, no se usa `base`.

### Dominio propio

El dominio `codesunlu.com.ar` se configura en GitHub, no en el código (con
deploy por GitHub Actions el archivo `CNAME` se ignora):

1. En **Settings → Pages → Custom domain** del repositorio, cargar
   `codesunlu.com.ar` y activar **Enforce HTTPS** cuando el certificado esté listo.
2. En el DNS del dominio, apuntar el apex a GitHub Pages con registros `A`
   (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
   y, opcionalmente, `AAAA` (`2606:50c0:8000::153`, `2606:50c0:8001::153`,
   `2606:50c0:8002::153`, `2606:50c0:8003::153`).
3. Para que `www.codesunlu.com.ar` redirija al apex, agregar un `CNAME` de
   `www` hacia `codes-unlu.github.io`.
4. Recomendado: verificar el dominio en la configuración de Pages de la
   organización para evitar que otra cuenta lo tome.

## Convenciones

- **Solo pnpm** para instalar dependencias y correr scripts.
- **Conventional Commits en español** (ej.: `feat(nav): agrega menú responsive`).
- Los finales de línea se normalizan a **LF** vía `.gitattributes` /
  `.editorconfig`; los editores ya incluyen la configuración recomendada en
  `.vscode/`.

Ver [`AGENTS.md`](./AGENTS.md) para el detalle de las reglas.

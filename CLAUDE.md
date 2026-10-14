# Reglas del proyecto (obligatorias para agentes de IA)

## Gestor de paquetes: solo `pnpm`

- Usá **únicamente `pnpm`**. Está **prohibido** `npm`, `yarn` y `bun`, ni
  siquiera para un comando puntual.
- El único lockfile válido es `pnpm-lock.yaml`. No generes ni commitees
  `package-lock.json` ni `yarn.lock`.
- Agregá dependencias con `pnpm add <paquete>` / `pnpm add -D <paquete>`. Nunca
  edites versiones a mano en `package.json` sin correr `pnpm install` para
  actualizar el lockfile.
- Ejecutá scripts con `pnpm run <script>` (por ejemplo `pnpm run build`).

## Commits: Conventional Commits en español

- Formato del asunto:

  ```text
  <tipo>(<alcance opcional>): <descripción en español>
  ```

- Tipos permitidos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`,
  `build`, `ci`, `chore`, `revert`.
- La descripción va **en español**, en minúscula y en imperativo
  (ej.: `feat(nav): agrega menú responsive`).
- El alcance es opcional, en minúscula y entre paréntesis
  (ej.: `fix(hero): corrige desborde en mobile`).
- El cuerpo (opcional) también va en español y explica el *qué* y el *por qué*,
  no el *cómo*.
- Cambios que rompen compatibilidad: agregá `!` después del tipo/alcance y una
  sección `BREAKING CHANGE:` en el cuerpo.
- Un commit = un cambio lógico. No mezcles refactors con features.
- No agregues firmas de herramientas de IA ni líneas `Co-Authored-By` de asistentes.

## Saltos de línea

- El repositorio guarda **siempre** el texto con **LF**, sin importar el sistema
  operativo. Esto lo garantizan `.gitattributes` y `.editorconfig`.
- No cambies los finales de línea de un archivo ni desactives esas reglas.
- Si un archivo aparece como modificado por completo, es casi seguro CRLF vs LF:
  no lo commitees así, revisá el editor y volvé a normalizar.

## Development

When starting the dev server, use background mode:

```
pnpm dev --background
```

Manage the background server with `pnpm dev stop`, `pnpm dev status`, and
`pnpm dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

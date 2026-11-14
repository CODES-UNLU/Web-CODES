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
- **Atribución obligatoria de IA**: todo commit creado o asistido por un agente
  de IA (Claude Code, Codex, Gemini CLI, Antigravity, Cursor, Copilot, etc.)
  **debe** cerrar con una línea `Co-Authored-By` al final del cuerpo, separada
  por una línea en blanco, indicando el **nombre y versión reales del modelo**
  junto al **correo oficial vinculado en GitHub** (para que GitHub reconozca el
  bot/cuenta y no quede un correo genérico sin perfil):

  ```text
  Co-Authored-By: <Nombre del modelo y versión> <correo de GitHub del proveedor>
  ```

  Correos oficiales en GitHub según el proveedor del modelo/agente:
  - **Anthropic (Claude):** `<noreply@anthropic.com>`
  - **Google (Gemini):** `<176961590+gemini-code-assist[bot]@users.noreply.github.com>`
  - **OpenAI (Codex / GPT):** `<199175422+chatgpt-codex-connector[bot]@users.noreply.github.com>`
  - **GitHub Copilot:** `<167198135+copilot[bot]@users.noreply.github.com>`

  Ejemplos:
  - `Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>`
  - `Co-Authored-By: Gemini 2.5 Pro <176961590+gemini-code-assist[bot]@users.noreply.github.com>`
  - `Co-Authored-By: GPT-5 <199175422+chatgpt-codex-connector[bot]@users.noreply.github.com>`
  - `Co-Authored-By: Copilot <167198135+copilot[bot]@users.noreply.github.com>`
- Usá siempre el nombre y la versión **reales** del modelo que trabajó (no
  solo el nombre del IDE o herramienta como `Antigravity` o `Cursor`); si no los
  conocés con certeza, indicá el agente o la herramienta. Si intervinieron
  varios modelos, agregá una línea por cada uno.
- Si el agente o la plataforma trae su propia plantilla de atribución con un
  correo válido en GitHub, podés usarla siempre que quede claro el modelo
  usado (en el `Co-Authored-By` o en el cuerpo del commit).
- En descripciones de Pull Requests creadas por un agente, indicá también qué
  agente y modelo se usaron.

## Saltos de línea

- El repositorio guarda **siempre** el texto con **LF**, sin importar el sistema
  operativo. Esto lo garantizan `.gitattributes` y `.editorconfig`.
- No cambies los finales de línea de un archivo ni desactives esas reglas.
- Si un archivo aparece como modificado por completo, es casi seguro CRLF vs LF:
  no lo commitees así, revisá el editor y volvé a normalizar.

## Skill obligatoria para UI: `frontend-design`

- La skill está versionada en el repositorio en
  `.agents/skills/frontend-design/SKILL.md` (licencia Apache 2.0 en
  `LICENSE.txt`). **Todos los agentes de IA** deben leerla, no solo Claude.
- Antes de crear o modificar cualquier interfaz visual (páginas, componentes,
  layouts, estilos o clases de Tailwind), **es obligatorio** aplicar esa skill.
  Hacerlo antes de escribir código, no después.
- Si tu agente tiene un mecanismo nativo de skills, usalo también: en Claude
  Code, invocá `frontend-design:frontend-design` con la herramienta `Skill`
  (el plugin está habilitado en `.claude/settings.json`).
- Si la tarea no toca la UI (configuración de build, scripts, documentación),
  no hace falta.

## Documentación de librerías: Context7 obligatorio

- Antes de escribir o modificar código que dependa de una librería, framework,
  SDK o API (Astro, Tailwind, etc.), **es obligatorio** consultar la
  documentación actualizada en [Context7](https://context7.com/), aunque creas
  conocer la respuesta: tu conocimiento previo puede estar desactualizado.
- Si tu agente tiene el MCP de Context7, usalo (en Claude Code, el plugin
  `context7` está disponible: `resolve-library-id` y luego `query-docs`). Si no,
  consultá el sitio directamente.
- Aplica a sintaxis de APIs, configuración, migraciones de versión y
  depuración específica de una librería. No hace falta para lógica propia del
  proyecto ni conceptos generales de programación.

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

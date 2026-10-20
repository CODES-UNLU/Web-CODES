# 12. RevisiÃ³n CrÃ­tica, ValidaciÃ³n TÃ©cnica y TaxonomÃ­a de Evidencias

Este documento somete a examen crÃ­tico las afirmaciones, hipÃ³tesis y conclusiones formuladas en los entregables anteriores (`01` a `11`), corrigiendo imprecisiones frente al cÃ³digo fuente y estableciendo una rigurosa separaciÃ³n entre hechos demostrables, inferencias y decisiones pendientes de validaciÃ³n.

---

## 1. VerificaciÃ³n de Consistencia del Inventario Funcional

Se contrastÃ³ el inventario funcional en todos los documentos de la auditorÃ­a:

- **Unicidad de Identificadores:** Se identificaron formalmente **40 funcionalidades** etiquetadas unÃ­vocamente desde **`FN-01` hasta `FN-40`**.
- **Consistencia Cruzada:**
  - `01-inventario-funcional.md`: Contiene las fichas tÃ©cnicas completas de `FN-01` a `FN-40`.
  - `03-evaluacion-y-depuracion.md`: Mapea exactamente cada una de las 40 funcionalidades en su matriz de evaluaciÃ³n crÃ­tica.
  - `06-arquitectura-de-informacion.md` y `08-roadmap-migracion.md`: Absorben y trazan el destino de las 40 funcionalidades.
- **CorrecciÃ³n de Nomenclatura:** Se verificÃ³ que ninguna funcionalidad posea IDs duplicados ni etiquetas genÃ©ricas. Toda referencia a una funciÃ³n existente en el cÃ³digo responde a su cÃ³digo `FN-xx`.

---

## 2. Rectificaciones TÃ©cnicas Frente al CÃ³digo Fuente

La reinspecciÃ³n minuciosa del repositorio React (`WebCodes2026`) arrojÃ³ precisiones fundamentales sobre afirmaciones realizadas en la primera pasada:

### 2.1. AutenticaciÃ³n y Rutas Administrativas (`/admin` vs `/dashboard`)
- **AfirmaciÃ³n previa:** *"Tanto `/admin` como `/dashboard` carecen por completo de autenticaciÃ³n y exponen datos personales"*.
- **Contraste con el cÃ³digo fuente real:**
  - En `src/App.jsx` (lÃ­nea 105), la ruta `/dashboard` **SÃ estÃ¡ protegida**:
    ```jsx
    <Route path="/dashboard" element={
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    } />
    ```
    El componente `src/components/ProtectedRoute.jsx` verifica activamente la sesiÃ³n de Supabase Auth (`isAuthenticated`) y redirige a `/login` si no hay sesiÃ³n vÃ¡lida.
  - **Sin embargo, la ruta `/admin` (`src/pages/AdminPage.jsx`) y `/test-dashboard` (`src/components/TestDashboard.jsx`) NO estÃ¡n envueltas en `<ProtectedRoute>`.**
  - **Fallo Real Demostrado:** `AdminPage.jsx` es una ruta pÃºblica desprotegida. Realiza peticiones a una URL de Google Apps Script hardcodeada:
    `https://script.google.com/macros/s/AKfycbztYN0tvRptLKBaX0jtSvSFQ9QtK0dEEDDoXOltDJSisTWz5trO2n7i8ytZ1ZF5BXKi/exec`
    Cualquier persona que visite `/admin` o inspeccione el cÃ³digo puede consultar compradores, emails, telÃ©fonos y fechas de compra de rifas.
  - **ConclusiÃ³n rectificada:** `/dashboard` cuenta con capa de seguridad en el frontend; `/admin` es la brecha crÃ­tica real de exposiciÃ³n de datos.

### 2.2. Supabase y PolÃ­ticas de Seguridad a Nivel de Fila (RLS)
- En `src/components/WhatsAppManagement.jsx` (renderizado dentro de `AdminPage.jsx`), el cÃ³digo ejecuta:
  ```javascript
  const { data, error } = await supabase.from('whatsapp_requests').select('*');
  ```
- **Riesgo:** Si en el proyecto de Supabase la tabla `whatsapp_requests` o el bucket de almacenamiento `certificados` tienen RLS deshabilitado o polÃ­ticas pÃºblicas de lectura (`anon: select`), la desprotecciÃ³n de `/admin` permite a cualquier usuario listar todas las solicitudes de estudiantes con sus respectivos archivos PDF.
- **AclaraciÃ³n de certeza:** No se puede comprobar el estado de las polÃ­ticas RLS en la base de datos remota de Supabase sin acceso a la consola de administraciÃ³n; pero **en el cÃ³digo cliente, la consulta se efectÃºa sin token JWT de autorizaciÃ³n**.

### 2.3. CÃ³digo HuÃ©rfano en el Repositorio Antiguo
- Se detectÃ³ en `src/App.tsx` el archivo de plantilla original de Vite (`Vite + React`, contador de clics).
- `index.html` (lÃ­nea 113) carga exclusivamente `/src/main.jsx`, el cual monta `src/App.jsx`.
- **Hecho:** `App.tsx` es cÃ³digo muerto residual de la inicializaciÃ³n del proyecto y no participa en el empaquetado de la aplicaciÃ³n.

### 2.4. TelemetrÃ­a y Dependencias de Terceros en `index.html`
- `index.html` contiene configurada la etiqueta de Google Analytics 4: `G-C73GLNE05C`.
- Carga hojas de estilo externas desde CDNs: `bootstrap-icons@1.11.1`.
- Define metadatos Open Graph apuntando al dominio `https://codes-unlu.github.io/` y correo institucional `sistemas@codesunlu.tech`.

---

## 3. TaxonomÃ­a de Evidencias

Para evitar presentar suposiciones como verdades absolutas, cada afirmaciÃ³n de la auditorÃ­a se clasifica en una de las siguientes seis categorÃ­as formales:

```
+-----------------------------------------------------------------------------------+
|                            TAXONOMÃA DE EVIDENCIAS                                |
+-----------------------------------------------------------------------------------+
| [HC] HECHO COMPROBADO EN CÃ“DIGO: Evidencia fÃ­sica en lÃ­neas de cÃ³digo fuente.    |
| [CE] COMPROBADO EN EJECUCIÃ“N: Verificado ejecutando la aplicaciÃ³n o build.        |
| [IT] INFERENCIA TÃ‰CNICA: DeducciÃ³n lÃ³gica basada en arquitectura y librerÃ­as.     |
| [UX] PROBLEMA DE UX A TESTEAR: FricciÃ³n observable que requiere prueba de usuario.|
| [HE] HIPÃ“TESIS DE NECESIDAD ESTUDIANTIL: AsunciÃ³n razonable sobre los alumnos.    |
| [DP] DECISIÃ“N DE PRODUCTO PENDIENTE: Propuesta que requiere aprobaciÃ³n humana.    |
+-----------------------------------------------------------------------------------+
```

### Tabla de ClasificaciÃ³n de Conclusiones Principales

| TÃ³pico / ConclusiÃ³n | CategorÃ­a | Evidencia / JustificaciÃ³n |
| :--- | :---: | :--- |
| El botÃ³n "ConocÃ© Nuestros Grupos" lleva a "En ConstrucciÃ³n" | **[HC]** | `Hero.jsx` (L34) enlaza a `/grupos`; `Groups.jsx` (L14) renderiza el aviso de construcciÃ³n. |
| `/admin` expone datos de rifas sin login | **[HC]** | `App.jsx` (L100) no envuelve `AdminPage` en `ProtectedRoute`. La URL de Google Apps Script estÃ¡ en L13 de `AdminPage.jsx`. |
| `/dashboard` tiene protecciÃ³n de autenticaciÃ³n | **[HC]** | `App.jsx` (L105-108) envuelve `Dashboard` en `ProtectedRoute.jsx` verificando `useAuth()`. |
| La validaciÃ³n de WhatsApp consume 2 MB de PDF.js y consulta IP | **[HC]** | `WhatsAppRegistration.jsx` importa `pdfjs-dist` y hace fetch a `api.ipify.org`. |
| El sitio antiguo tarda mÃ¡s de 3 segundos en redes mÃ³viles | **[IT]** | El bundle incluye React 19, Bootstrap 5, PDF.js y Supabase client (> 4 MB sin comprimir). |
| La grilla mensual de 7 columnas es ilegible en pantallas chicas | **[UX]** | `Calendar.jsx` usa celdas fijas que en anchos < 375px cortan el texto con elipsis. Requiere prueba con usuarios en dispositivos reales. |
| Los ingresantes abandonan el registro de WhatsApp por no tener PDF | **[HE]** | HipÃ³tesis basada en que los ingresantes recientes no disponen de certificado regular emitido en las primeras semanas. |
| El estudiante de sistemas prioriza encontrar trÃ¡mites sobre herramientas externas | **[HE]** | HipÃ³tesis pedagÃ³gica: los alumnos buscan resolver su cursada antes que links genÃ©ricos a Docker o Vim. |
| Eliminar el formulario de validaciÃ³n de WhatsApp y pasar a directorio abierto | **[DP]** | **Propuesta sujeta a validaciÃ³n**: la comisiÃ³n directiva debe decidir si asume el riesgo de spam en grupos abiertos o si prefiere un bot/grupo de bienvenida. |
| Descartar el sistema de rifas en el sitio estÃ¡tico de GitHub Pages | **[DP]** | **Propuesta sujeta a validaciÃ³n**: el centro debe definir si las rifas son un evento esporÃ¡dico o una necesidad continua de recaudaciÃ³n. |
| FusiÃ³n de "Colaborar" y "Proyectos Reales" en una sola convocatoria | **[DP]** | **Propuesta sujeta a validaciÃ³n**: depende de la estructura organizativa de las secretarÃ­as de CODES. |

---

## 4. AnÃ¡lisis CrÃ­tico de la Arquitectura Feature-Driven Propuesta

Se analizÃ³ la arquitectura propuesta en `11-arquitectura-feature-driven.md` buscando evitar **sobreingenierÃ­a o abstracciones prematuras**:

### 4.1. Riesgos de Complejidad Innecesaria Detectados
1. **ProliferaciÃ³n excesiva de subcarpetas:** Crear carpetas `types/`, `utils/`, `data/`, `components/` dentro de cada feature cuando una funcionalidad solo tiene 1 componente `.astro` genera ruido innecesario en el repositorio.
   - *CorrecciÃ³n:* **Arquitectura Feature-Driven PragmÃ¡tica**. Solo se crean subcarpetas en una feature si realmente existen mÃºltiples archivos. Si una feature solo requiere un componente y un archivo de datos, coexisten en la raÃ­z de `src/features/<nombre>/`.
2. **DuplicaciÃ³n de esquemas de datos:** Manejar datos en `src/features/<feature>/data/*.json` y simultÃ¡neamente en `src/content/` puede generar confusiÃ³n sobre la "fuente de la verdad".
   - *CorrecciÃ³n:* Todo contenido editable institucional (trÃ¡mites, reglamentos, novedades) debe residir **exclusivamente en `src/content/`**. Los archivos JSON en features se reservan Ãºnicamente para estructuras fijas de UI (ej. lista de campos del menÃº o enlaces estÃ¡ticos a sedes).

---

## 5. VerificaciÃ³n de Compatibilidad de Astro y Despliegue EstÃ¡tico

- **RestricciÃ³n de Infraestructura:** El despliegue se realiza en **GitHub Pages** bajo el subpath `/Web-CODES`. GitHub Pages es un servidor de archivos puramente estÃ¡tico (no soporta Node.js, SSR ni funciones serverless en runtime).
- **ValidaciÃ³n:**
  - Todas las rutas propuestas se generan mediante **SSG (Static Site Generation)** con `output: 'static'` (configuraciÃ³n predeterminada de Astro).
  - Los formularios que requieran envÃ­o de datos (como "Sumate") no pueden utilizar endpoints de backend locales en Astro (`/api/...`). Deben canalizarse a travÃ©s de servicios externos (Formspree, Google Forms, Tally.so o webhooks de Discord).
  - La interactividad del lado del cliente (filtro de calendario, buscador de trÃ¡mites, alternador de tema) se mantiene 100% compatible mediante scripts ligeros de Vanilla JS inyectados en el HTML final. Cero riesgo de incompatibilidad de hosting.
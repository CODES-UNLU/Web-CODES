# 04. AuditorÃ­a UX/UI, Responsive y Accesibilidad

Este documento detalla los problemas de usabilidad, experiencia mÃ³vil, diseÃ±o visual y accesibilidad detectados en el repositorio React (`WebCodes2026`).

---

## 1. Resumen de Hallazgos CrÃ­ticos

```
+-----------------------------------------------------------------------------------+
|                           HALLAZGOS CLAVE DE USABILIDAD                           |
+-----------------------------------------------------------------------------------+
| 1. SaturaciÃ³n del MenÃº: 16 enlaces en el Navbar impiden la exploraciÃ³n mÃ³vil.     |
| 2. Quiebre de Confianza en el Hero: El CTA principal lleva a "En ConstrucciÃ³n".   |
| 3. Colapso en Mobile del Calendario: Grilla de 7 columnas ilegible en pantallas.   |
| 4. Burocracia Punitiva: Bloqueo de alumnos por IP y PDF en WhatsAppRegistration.  |
| 5. Contraste y TipografÃ­a: Colores neÃ³n con ratios inferiores a WCAG AA (4.5:1).   |
| 6. Falta de SemÃ¡ntica: Divs con onClick en lugar de botones o enlaces nativos.    |
+-----------------------------------------------------------------------------------+
```

---

## 2. NavegaciÃ³n y Arquitectura de InformaciÃ³n

### Problema 1: Sobrecarga Cognitiva en la Barra de NavegaciÃ³n (`Navbar.jsx`)
- **Severidad:** ALTA
- **Evidencia en cÃ³digo:** `src/components/Navbar.jsx` (lÃ­neas 45-120).
- **DescripciÃ³n:** El menÃº contiene 16 enlaces simultÃ¡neos en el header: *Inicio, Novedades, Eventos, Charlas, Talleres, Recursos, Calendario, Proyectos Reales, Colaborar, Comunidad, Rifas, Transparencia, CACIC, ExpoUNLu, Sobre Nosotros, Admin*.
- **Impacto en el usuario:** En dispositivos mÃ³viles, al abrir el menÃº hamburguesa, la lista sobrepasa la altura de la pantalla (`100vh`) requiriendo scroll vertical extenso para encontrar opciones bÃ¡sicas. Un estudiante que entra por primera vez no sabe cuÃ¡l de las 16 opciones contiene la respuesta a su problema.
- **Mejora propuesta:** Agrupar en un esquema jerÃ¡rquico de mÃ¡ximo 5 secciones orientadas al alumno:
  1. **Inicio**
  2. **Ingresantes y GuÃ­as** (TrÃ¡mites, FAQs, InscripciÃ³n)
  3. **Calendario** (Fechas de examen y cursada)
  4. **Comunidad** (Grupos de WhatsApp, Discord, QuiÃ©nes somos)
  5. **Novedades y Actividades** (Charlas, avisos)

---

### Problema 2: El Flujo Principal del Hero Conduce a una Pantalla Rota
- **Severidad:** CRÃTICA
- **Evidencia en cÃ³digo:** `src/components/Hero.jsx` (lÃ­nea 34) vincula el botÃ³n principal "ConocÃ© Nuestros Grupos" con `/grupos`. Sin embargo, `src/pages/Groups.jsx` (lÃ­neas 12-25) muestra:
  ```jsx
  <div className="alert alert-warning">
    <h3>ðŸš§ En ConstrucciÃ³n ðŸš§</h3>
  </div>
  ```
- **Impacto en el usuario:** El botÃ³n con mayor peso visual y de mayor urgencia para un ingresante nuevo genera frustraciÃ³n inmediata y sensaciÃ³n de abandono institucional.
- **Mejora propuesta:** El botÃ³n principal del Hero debe dirigir a un directorio operativo de canales de comunicaciÃ³n o al portal de bienvenida para ingresantes.

---

## 3. Experiencia Mobile y Responsive Design

### Problema 3: Grilla RÃ­gida del Calendario AcadÃ©mico (`Calendar.jsx`)
- **Severidad:** ALTA
- **Evidencia en cÃ³digo:** `src/pages/Calendar.jsx` (lÃ­neas 110-180).
- **DescripciÃ³n:** Utiliza una estructura fija de CSS Grid con `grid-template-columns: repeat(7, 1fr)`. Cada celda de dÃ­a tiene un ancho inferior a 40px en telÃ©fonos con ancho de pantalla entre 320px y 375px (iPhone SE, Galaxy A).
- **Impacto en el usuario:** Los textos de los eventos ("InscripciÃ³n a Materias", "Receso Invernal") se cortan con `overflow: hidden` o `text-overflow: ellipsis`, haciendo imposible leer el nombre del evento o la fecha sin tocar cada celda milimÃ©tricamente.
- **Mejora propuesta:** Implementar diseÃ±o responsivo adaptativo:
  - En pantallas `< 768px`, reemplazar la grilla por una vista vertical en lista cronolÃ³gica (Timeline) con tarjetas legibles por fecha y badges de categorÃ­a.

---

### Problema 4: Parche Imperativo de Eventos TÃ¡ctiles (`index.html`)
- **Severidad:** MEDIA
- **Evidencia en cÃ³digo:** `index.html` (script inyectado en el `<head>`):
  ```javascript
  // Parche para evitar errores pasivos de touchstart
  jQuery.event.special.touchstart = {
    setup: function( _, ns, handle ) {
      this.addEventListener("touchstart", handle, { passive: !ns.includes("noPreventDefault") });
    }
  };
  ```
- **DescripciÃ³n:** Se incluyeron parches globales de jQuery para forzar listeners pasivos porque carruseles y animaciones de terceros bloqueaban el scroll nativo en iOS y Android.
- **Impacto en el usuario:** PÃ©rdida de fluidez en el scroll y riesgos de congelamiento de pantalla tÃ¡ctil.
- **Mejora propuesta:** En Astro, eliminar dependencias heredadas de jQuery y Bootstrap; el scroll vertical debe ser 100% nativo mediante CSS limpio.

---

## 4. Accesibilidad (a11y) y Legibilidad

### Problema 5: Contraste Insuficiente en Tema Oscuro (`index.css`)
- **Severidad:** ALTA
- **Evidencia en cÃ³digo:** `src/index.css` define paletas con texto secundario `#6c757d` y acentos `#00ffcc` o `#007bff` sobre fondos oscuros `#121212`.
- **AnÃ¡lisis WCAG:**
  - Ratio de contraste de texto secundario sobre fondo oscuro: `2.8:1` (El estÃ¡ndar mÃ­nimo WCAG 2.1 AA exige `4.5:1` para texto normal).
  - En exteriores con luz solar, los textos de fechas y subtÃ­tulos son prÃ¡cticamente invisibles en celulares.
- **Mejora propuesta:** Ajustar la paleta de colores para garantizar un ratio de contraste mÃ­nimo de `4.8:1` tanto en modo claro como en modo oscuro.

---

### Problema 6: Elementos Clickeables no SemÃ¡nticos y Falta de Focus Ring
- **Severidad:** MEDIA
- **Evidencia en cÃ³digo:** En `FAQ.jsx`, `Resources.jsx` y `AdminPage.jsx`, mÃºltiples elementos interactivos estÃ¡n construidos como:
  ```jsx
  <div className="filter-badge" onClick={handleFilter}>
    {category}
  </div>
  ```
- **Impacto en el usuario:**
  - No pueden ser activados mediante teclado (tecla `Tab` ni `Enter`).
  - Los lectores de pantalla (NVDA, TalkBack, VoiceOver) no los reconocen como botones o controles.
  - Al no tener `outline` de foco visible, los usuarios con dificultades motrices no pueden navegar la web.
- **Mejora propuesta:** Usar exclusivamente etiquetas semÃ¡nticas `<button type="button">` o `<a href="...">` con estilos accesibles de `:focus-visible`.

---

## 5. DiseÃ±o Visual y JerarquÃ­a

### Problema 7: Abuso de Efectos Visuales de Inteligencia Artificial (Glows, Blur, Glassmorphism)
- **Severidad:** MEDIA
- **Evidencia en cÃ³digo:** `src/index.css` y estilos en lÃ­nea con `backdrop-filter: blur(16px)`, `box-shadow: 0 0 25px rgba(0, 255, 200, 0.35)`.
- **DiagnÃ³stico:** La interfaz sufre del sÃ­ndrome clÃ¡sico de interfaces generadas por IA: excesivos bordes brillantes, degradados fluorescentes y tarjetas flotantes semitransparentes que compiten entre sÃ­ por la atenciÃ³n visual.
- **Impacto en el usuario:** En lugar de priorizar la lectura clara de fechas y reglamentos, el sitio parece una landing page comercial de una empresa cripto o de videojuegos, desentonando con el rol institucional de contenciÃ³n de un centro de estudiantes universitario.
- **Mejora propuesta:** Adoptar un diseÃ±o editorial sobrio, limpio y moderno:
  - TipografÃ­a legible (Inter o Roboto).
  - Fondo neutro y contrastes sÃ³lidos.
  - El color se reserva para indicar estado y jerarquÃ­a (fechas lÃ­mites, advertencias, enlaces activos).
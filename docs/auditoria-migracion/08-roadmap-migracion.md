# 08. PriorizaciÃ³n y Roadmap de MigraciÃ³n Incremental

Este documento establece el plan de trabajo por etapas para la reconstrucciÃ³n del sitio web en Astro, asegurando que el primer lanzamiento (MVP) resuelva las necesidades mÃ¡s urgentes de los estudiantes y reemplace al sitio antiguo de forma segura y sin pÃ©rdida de informaciÃ³n acadÃ©mica.

---

## 1. Fases del Roadmap de MigraciÃ³n

```
+-----------------------------------------------------------------------------------+
|                        ROADMAP INCREMENTAL DE RECONSTRUCCIÃ“N                      |
+-----------------------------------------------------------------------------------+
| FASE 1: MVP ESENCIAL (Lanzamiento inicial para reemplazar la web vieja)          |
| - Layout base responsivo con Tailwind CSS v4 y tema claro/oscuro.                |
| - Portal de Bienvenida para Ingresantes (/ingresantes).                          |
| - Calendario AcadÃ©mico UNLu interactivo y responsivo (/calendario).               |
| - Directorio pÃºblico y transparente de WhatsApp y canales oficiales (/comunidad). |
| - GuÃ­as esenciales de trÃ¡mites (Boleto SUBE, Regularidad, SIU GuaranÃ­).          |
| - PÃ¡gina institucional bÃ¡sica con ubicaciÃ³n de mesa fÃ­sica y contacto (/nosotros).|
+-----------------------------------------------------------------------------------+
| FASE 2: SEGUNDA ETAPA (ConsolidaciÃ³n y valor agregado)                            |
| - Buscador de trÃ¡mites y preguntas frecuentes con filtrado instantÃ¡neo.           |
| - Videoteca de Charlas grabadas de YouTube optimizadas.                          |
| - Formulario unificado de voluntariado y proyectos ("Sumate").                   |
| - Banco de guÃ­as de estudio y modelos de parciales de primer aÃ±o.                |
+-----------------------------------------------------------------------------------+
| FASE 3: FUTURO Y VALIDACIÃ“N (Sujeto a confirmaciÃ³n con comisiÃ³n directiva)       |
| - Sistema de rifas estudiantiles (si la comisiÃ³n decide activarlo).              |
| - Mapa interactivo o croquis del campus de LujÃ¡n y centros regionales.           |
| - Bolsa de pasantÃ­as y ofertas laborales iniciales en el sector IT.              |
+-----------------------------------------------------------------------------------+
| ELEMENTOS DESCARTADOS (No migrar)                                                 |
| - ValidaciÃ³n punitiva de PDF / IP en WhatsApp.                                    |
| - Banco de recursos con herramientas genÃ©ricas de software (Docker, Vim).         |
| - Balances contables ficticios de transparencia.                                  |
| - Panel de administraciÃ³n expuesto sin autenticaciÃ³n (/admin y /dashboard).       |
| - Carruseles pesados y microinteracciones de cursor.                              |
+-----------------------------------------------------------------------------------+
```

---

## 2. Matriz de PriorizaciÃ³n Detallada

| Funcionalidad / MÃ³dulo | Valor Alumno | Frecuencia de Uso | Impacto ResoluciÃ³n | Complejidad Astro | Riesgo de EliminaciÃ³n | Fase Asignada |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Portal de Ingresantes** | Muy Alto | Muy Alta (febrero-marzo) | Muy Alto | Baja (EstÃ¡tico) | Nulo (Se crea de cero) | **MVP** |
| **Calendario AcadÃ©mico** | Muy Alto | Diaria / Semanal | Muy Alto | Baja-Media (JSON/ICS) | Alto si falta | **MVP** |
| **Directorio de WhatsApp** | Muy Alto | Muy Alta (ingreso y cursadas) | CrÃ­tico | Muy Baja (EstÃ¡tico) | Alto si falta | **MVP** |
| **TrÃ¡mites Esenciales** | Muy Alto | PeriÃ³dica | Muy Alto | Baja (Content Collections) | Alto si falta | **MVP** |
| **UbicaciÃ³n y Contacto** | Alto | Semanal | Alto | Muy Baja (EstÃ¡tico) | Medio | **MVP** |
| **Buscador de TrÃ¡mites** | Alto | PeriÃ³dica | Medio | Media (Pagefind/Vanilla) | Bajo | **Fase 2** |
| **Videoteca de Charlas** | Medio | Mensual | Medio | Baja (`lite-youtube`) | Bajo | **Fase 2** |
| **Formulario "Sumate"** | Medio | Semestral | Medio | Baja (Formspree/Tally) | Bajo | **Fase 2** |
| **Derechos Estudiantiles** | Alto | Ocasional | Alto | Baja (EstÃ¡tico) | Bajo | **Fase 2** |
| **Sistema de Rifas** | Bajo (general) | Temporal (cuando hay rifa) | Bajo | Alta (Requiere backend) | Bajo | **Fase 3 (Validar)** |
| **ValidaciÃ³n PDF/IP** | Negativo | - | Negativo | - | Ninguno (Beneficio) | **NO MIGRAR** |
| **Banco de Herramientas** | Nulo | - | Nulo | - | Ninguno | **NO MIGRAR** |
| **Transparencia Falsa** | Negativo | - | Negativo | - | Ninguno (Protege credibilidad) | **NO MIGRAR** |
| **Panel /admin Expuesto** | Negativo | - | Brecha seguridad | - | Ninguno (Protege datos) | **NO MIGRAR** |

---

## 3. Criterios de AceptaciÃ³n para el MVP

Para que el MVP pueda reemplazar legal y operativamente a la web anterior (`WebCodes2026`), debe cumplir las siguientes condiciones indispensables:

1. **Cero Pantallas Rotas:** NingÃºn enlace del menÃº, botÃ³n de inicio ni tarjeta debe llevar a pÃ¡ginas `"En ConstrucciÃ³n"` o errores 404.
2. **Acceso Inmediato a Grupos:** Cualquier estudiante debe poder incorporarse al grupo de WhatsApp de su materia o aÃ±o con un mÃ¡ximo de 2 clics desde el telÃ©fono mÃ³vil, sin formularios ni bloqueos.
3. **Calendario MÃ³vil Impecable:** El calendario acadÃ©mico oficial de la UNLu debe poder leerse sin scroll horizontal en pantallas de 320px de ancho.
4. **TrÃ¡mites Vitales Documentados:** Las 4 gestiones crÃ­ticas (Boleto SUBE, SIU GuaranÃ­, Regularidad y Cambio de Plan) deben tener guÃ­as explicativas con enlaces oficiales.
5. **Rendimiento Excepcional:**
   - Puntaje Lighthouse en Mobile: > 90 en Rendimiento, > 95 en Accesibilidad, > 95 en Buenas PrÃ¡cticas y > 95 en SEO.
   - Peso total de carga inicial: < 150 KB (frente a los mÃ¡s de 4 MB de la versiÃ³n React anterior).
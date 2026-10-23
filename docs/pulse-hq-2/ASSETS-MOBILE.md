# Ilustraciones móviles de la etapa B

Se crearon con la herramienta integrada de generación de imágenes. Los archivos seleccionados se optimizaron a WebP y están en `prototype/public/assets/mobile-rooms/`. No usan fotografías, marcas o datos de producción. Las imágenes no afirman representar el estado operativo de los agentes.

## Especificación de generación

Caso de uso: `stylized-concept`. Destino: fondo vertical de una habitación en un videojuego móvil de gestión de oficinas. Base común: una sola habitación isométrica en perspectiva de tres cuartos, paredes bajas color crema, ventanas, suelo claro, mobiliario tangible y detallado, iluminación natural cálida, paleta salvia, crema, terracota y nogal, arte de simulación 2.5D de calidad comercial. La habitación llena la composición con margen alrededor. Sin personas, personajes, letras, logos, interfaz, habitaciones vecinas ni muebles cortados. El personaje se superpone mediante código.

| Archivo | Petición específica |
|---|---|
| `direction.webp` | Oficina ejecutiva de Dirección Estratégica con escritorio de nogal y computadora, mesa secundaria de juntas, bibliotecas, lámparas, plantas, tablero de planificación y sillón. |
| `creative.webp` | Estudio creativo con tres estaciones de diseño asimétricas, monitores con formas abstractas, tabletas, muestras de color, biblioteca, cámara, softbox y tablero de ideas. |
| `technology.webp` | Área de ingeniería y automatización con estaciones de múltiples monitores, rack de equipos, mesa de robótica, pizarrón técnico, impresora, estantes y acentos azul pizarra; sin estética cyberpunk. |
| `lounge.webp` | Espacio de colaboración con sofá verde, sillones terracota, mesa de café, tablero compartido, biblioteca, barra de café, alfombras y plantas; sin escritorios dominantes. |
| `boardroom.webp` | Sala de juntas ejecutiva con mesa ovalada de nogal, seis sillas, laptops y carpetas, pantalla con formas abstractas, caballete, credenza y luminarias colgantes. |

Los prompts incluyeron expresamente perspectiva coherente, una sola sala y la ausencia de texto y personajes. Las cinco imágenes iniciales comprimidas pesan aproximadamente 600 kB en conjunto.

## Expansión visual del catálogo móvil

Tras la aceptación de la dirección visual, se generaron once escenas adicionales con la misma base artística, formato vertical y ausencia de texto, logos y personas. El objetivo fue que el mobiliario reflejara la profesión de cada departamento y que las seis áreas especiales se distinguieran de los puestos operativos. Cada archivo seleccionado se convirtió a WebP (aprox. 110–180 kB por sala).

| Archivo | Petición específica añadida al prompt común |
|---|---|
| `marketing.webp` | Estaciones de campañas, pantalla de analítica abstracta, tablero de conceptos y pruebas de marca, materiales de planificación y plantas. |
| `content.webp` | Sala editorial con estaciones de edición, monitores, micrófono y equipo de grabación, guiones, lámparas y mesas de revisión. |
| `sales.webp` | Oficina comercial con mesa de propuestas a clientes, carpetas, presentación, espacio de negociación y estantes de muestras. |
| `relations.webp` | Salón de alianzas con zona de conversación, escritorio de correspondencia, kits de prensa y pared de colaboraciones. |
| `events.webp` | Taller de producción de eventos con maqueta de escenario, muestras de luz, cronogramas visuales y almacenamiento de utilería. |
| `community.webp` | Sala de comunidad con mesas de conversación, estaciones de moderación, muro de retroalimentación y ambiente acogedor. |
| `intelligence.webp` | Biblioteca de investigación con mesa de análisis, pantallas de datos abstractos, mapas y archivos. |
| `finance.webp` | Oficina administrativa sobria con archivadores, estaciones contables, mesa de presupuestos y material de control. |
| `ceo.webp` | Oficina privada ejecutiva con escritorio central de nogal, sillas para visitas, ventana panorámica, biblioteca y zona de lectura. |
| `missions.webp` | Centro de coordinación con mesa central, tableros de etapas, estaciones de trabajo y espacio para revisar hitos. |
| `rest.webp` | Área de descanso con cafetería, comedor, sofá, rincón de lectura, plantas y luz natural. |

Dos atlas transparentes adicionales fueron generados con la misma herramienta: `team-a-atlas-v1.webp` y `team-b-atlas-v1.webp` en `prototype/public/assets/characters/`. La petición describió cuatro personajes pixel art originales por fila y celdas separadas: colibrí estratega, gato productor, mapache comercial y liebre de alianzas; polilla de eventos, capibara de comunidad, búho analista y tortuga administrativa. Se pidió vestuario y herramientas acordes con cada función, siluetas legibles a tamaño pequeño, perspectiva de tres cuartos y fondo transparente. Se optimizaron a WebP con transparencia. Son conceptos de interfaz y no retratos ni estados de agentes reales.

## Planos conectados de la nueva navegación

`prototype/public/assets/world/departments-v2.webp` y `special-v2.webp` son imágenes originales generadas con la herramienta de imágenes integrada el 23 de octubre de 2026. Se pidió un plano isométrico continuo de diez salas profesionales en dos filas con pasillo central, paredes bajas, mobiliario diferenciado, textura cálida de simulación empresarial y ausencia de personajes, texto, marcas y UI. El segundo prompt utilizó el primer plano como referencia visual y pidió seis espacios especiales conectados con la misma perspectiva, materiales y luz. Se convirtió cada salida PNG de 1774 × 887 a WebP calidad 86. Las imágenes no proceden del video de referencia ni reproducen su marca.

Los puntos de selección y agentes se añaden mediante DOM y CSS sobre las coordenadas de estas dos imágenes. El plano es arte estático, mientras que la cámara, los puntos interactivos y el estado de trabajo son lógica de aplicación. Un movimiento de personaje solo representa ejecución si existe un registro reciente verificado; los demás personajes son señales de presencia visual. Las ilustraciones anteriores de una sala por pantalla se conservan como alternativa si falla la carga.

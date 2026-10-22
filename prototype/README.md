# PULSE HQ 2.0 — muestra visual aislada

Esta aplicación permite recorrer los diez departamentos y seis espacios especiales ilustrados en móvil, abrir fichas de habitaciones y personajes, y ver una explicación de cómo se visualizarían misiones. Presenta un ambiente por pantalla: desliza a izquierda o derecha, usa las flechas o toca los indicadores para cambiar de sala. En escritorio conserva el edificio inicial de cinco ambientes y su cámara libre con desplazamiento y zoom; la expansión del edificio de escritorio sigue pendiente. Es una muestra **sin conexión al servidor**: no consulta ni modifica tareas, misiones, aprobaciones o agentes reales. Los nombres de los personajes son provisionales.

## Ejecutar

```bash
cd prototype
npm ci
npm run dev
```

Abre la dirección local que imprima Vite, normalmente `http://localhost:5173/`. Para revisar desde un iPhone en la misma red, ejecuta el servidor en una computadora con `npm run dev -- --host 0.0.0.0`, identifica la IP local de esa computadora y abre `http://IP_LOCAL:5173/` en Safari. El firewall debe permitir el puerto. Comprueba el deslizamiento horizontal en ambos sentidos, flechas e indicadores, selección de sala y agente, y el panel inferior. La vista móvil usa la ilustración directamente y no necesita WebGL. En escritorio, si WebGL falla, aparece la oficina ilustrada navegable.

`npm run build` crea los archivos estáticos en `dist/`. `npm test` verifica que los estados visuales no inventen trabajo. La escena 3D requiere WebGL; el navegador usado para la revisión automatizada bloqueó ese contexto, de modo que la prueba visual certifica únicamente la alternativa ilustrada. Una prueba física en iPhone sigue pendiente.

## Recursos

- [Kenney Furniture Kit](https://kenney.nl/assets/furniture-kit): muebles GLB e ilustraciones isométricas usados en la oficina. Licencia CC0; copia en `public/assets/furniture/LICENSE-KENNEY.txt`.
- `pulse-agents-pixel-atlas-v1.webp`: cinco personajes originales de pixel art generados para esta dirección visual, inspirados en la variedad y acabado de la referencia aportada por el CEO. No reproducen personajes ni marcas de la captura. Se usan en la oficina y en las fichas; no representan actividad real.
- `team-a-atlas-v1.webp` y `team-b-atlas-v1.webp`: ocho personajes conceptuales adicionales para la navegación móvil, distribuidos en cuatro celdas por archivo. La estética de los personajes es original; las etiquetas de rol no identifican agentes del backend.
- [Kenney Mini Characters](https://kenney.nl/assets/mini-characters): recursos de exploración anterior conservados en la rama, actualmente no cargados por la interfaz. Licencia CC0; copia en `public/assets/characters/LICENSE-KENNEY.txt`.
- `office-map.webp` se compuso a partir de las vistas de Furniture Kit y recursos dibujados para esta muestra. No contiene datos de producción.
- `public/assets/mobile-rooms/*.webp`: dieciséis habitaciones originales generadas con la herramienta integrada de imágenes para esta muestra y optimizadas a WebP. Cada sala tiene mobiliario propio; los personajes se superponen como elementos interactivos en los diez departamentos. No contienen datos empresariales. La procedencia y los prompts de la expansión se documentan en `../docs/pulse-hq-2/ASSETS-MOBILE.md`.

La decisión visual y los criterios figuran en `../docs/pulse-hq-2/DESIGN.md`; la auditoría, integración y resultados están en el mismo directorio. Esta rama no se fusiona ni se publica en GitHub Pages hasta la aprobación del CEO.

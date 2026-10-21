# PULSE HQ 2.0 — muestra visual aislada

Esta aplicación permite recorrer cinco ambientes amueblados, abrir fichas de habitaciones y personajes, desplazar y acercar la cámara, y ver una explicación de cómo se visualizarían misiones. Es una muestra **sin conexión al servidor**: no consulta ni modifica tareas, misiones, aprobaciones o agentes reales. Los nombres de los personajes son provisionales.

## Ejecutar

```bash
cd prototype
npm ci
npm run dev
```

Abre la dirección local que imprima Vite, normalmente `http://localhost:5173/`. Para revisar desde un iPhone en la misma red, ejecuta el servidor en una computadora con `npm run dev -- --host 0.0.0.0`, identifica la IP local de esa computadora y abre `http://IP_LOCAL:5173/` en Safari. El firewall debe permitir el puerto. Esta ruta de red local es la única revisión móvil disponible sin publicar la muestra. Comprueba la vista gráfica, el desplazamiento con un dedo, el zoom con dos dedos, la selección de salas y agentes, y el inspector. Si Safari no abre WebGL, aparece la oficina ilustrada navegable.

`npm run build` crea los archivos estáticos en `dist/`. `npm test` verifica que los estados visuales no inventen trabajo. La escena 3D requiere WebGL; el navegador usado para la revisión automatizada bloqueó ese contexto, de modo que la prueba visual certifica únicamente la alternativa ilustrada. Una prueba física en iPhone sigue pendiente.

## Recursos

- [Kenney Furniture Kit](https://kenney.nl/assets/furniture-kit): muebles GLB e ilustraciones isométricas usados en la oficina. Licencia CC0; copia en `public/assets/furniture/LICENSE-KENNEY.txt`.
- [Kenney Mini Characters](https://kenney.nl/assets/mini-characters): seis personajes GLB e imágenes de vista previa. Licencia CC0; copia en `public/assets/characters/LICENSE-KENNEY.txt`.
- `office-map.webp` se compuso a partir de las vistas de Furniture Kit y recursos dibujados para esta muestra. No contiene datos de producción.

La decisión visual y los criterios figuran en `../docs/pulse-hq-2/DESIGN.md`; la auditoría, integración y resultados están en el mismo directorio. Esta rama no se fusiona ni se publica en GitHub Pages hasta la aprobación del CEO.

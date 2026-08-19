# Conquista Europa · Roadmap Google Play

## Objetivo
Convertir `conquista.html` en una app Android estable, instalable y publicable en Google Play sin rehacer el juego desde cero.

## Fase 1 · MVP móvil
- [x] Juego único responsive: móvil, tablet y PC.
- [x] Mapa desplazable y con zoom.
- [x] Partida solo vs IA y multijugador local.
- [x] Fases de turno: refuerzo, ataque, movimiento y finalización.
- [x] Guardado local de partida y estadísticas.
- [ ] Interfaz móvil "map-first": mapa casi a pantalla completa y controles contextuales.
- [ ] Bottom sheet móvil para turno, acciones y regiones.
- [ ] Autozoom a países pequeños y al frente activo.
- [ ] Mejorar accesibilidad táctil y orientación horizontal.
- [ ] Pruebas completas en varios tamaños Android.

## Fase 2 · App Android / beta cerrada
- [x] Configuración inicial de Capacitor.
- [x] Build reproducible a `dist/`.
- [x] Identificador Android: `com.nexhome360.conquistaeuropa`.
- [ ] Incluir D3, TopoJSON y geometría del mapa dentro de la app para funcionar offline.
- [ ] Crear proyecto Android con `npm run android:init`.
- [ ] Icono adaptativo, splash y recursos Android.
- [ ] Probar pausa/reanudación, rotación, cierre forzado y recuperación de partida.
- [ ] Generar primer APK de pruebas.
- [ ] Beta cerrada con testers reales y registro de bugs.

## Fase 3 · Versión 1.0 Play Store
- [ ] Balance final de Fácil, Normal, Difícil y Experto.
- [ ] Tutorial de primera partida.
- [ ] Pantalla final y estadísticas de combate.
- [ ] Funcionamiento 100% offline para las partidas normales.
- [ ] AAB firmado de release.
- [ ] Política de privacidad pública revisada.
- [ ] Ficha de Google Play: nombre, descripción, icono, feature graphic y capturas.
- [ ] Clasificación de contenido y formulario de seguridad de datos.
- [ ] Testing interno/cerrado completado.
- [ ] Publicación 1.0.

## Comandos de desarrollo

```bash
npm install
npm run build
npm run android:init
npm run android:open
```

Después del primer `android:init`, para sincronizar cambios web:

```bash
npm run android:sync
```

## Criterio para publicar
No subir a producción hasta que una partida completa pueda jugarse en un móvil Android sin errores de táctil, sin perder el guardado, sin depender de red para cargar el mapa y con navegación clara a una mano.

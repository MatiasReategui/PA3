# Plataforma de Gestión de Solicitudes Académicas – PA3

**Curso:** Programación Web II · **Código:** 30690 · **Periodo:** 202620 · **Institución:** ISIL
**Evaluación:** PA3 – Proceso de Aprendizaje 3 · **Sesiones evaluadas:** 8 a 10
**Unidad:** Construcción de aplicaciones frontend con React.js

## Integrantes

| Nombre completo | Participación |
|---|---|
| JOSE STUART FONSECA VEGA | 100% |
| MATÍAS REATEGUI | 100% |
| ENZO RODRIGO ALVARADO VEGA | 100% |
| CHRISTIAN PAOLO VERA PALOMINO | 100% |

## Descripción y objetivo

## Descripción

SPA (Single Page Application) en React para registrar y gestionar solicitudes académicas. Permite ver un resumen, consultar y filtrar el listado, abrir el detalle de una solicitud, registrar nuevas solicitudes, cambiar su estado y marcar favoritos. Los datos son locales y simulados; no se usa Axios ni autenticación, porque corresponden a la sesión 11 y quedan fuera del corte de la evaluación.

## Objetivo

Construir una SPA con React.js que use componentes, Hooks, React Router, Context API y una introducción básica a Redux, y justificar las decisiones técnicas de gestión de estado.

## Estado de las actividades

| Actividad | Contenido | Puntaje sugerido | Estado |
|---|---|---|---|
| 1 | SPA en React con JSX, componentes y Hooks (`useState`, `useEffect`) | 3 | Completada |
| 2 | Navegación con React Router | 3 | Completada |
| 3 | Estado global con Context API | 3 | Completada |

## Desarrollo

### Actividad 1 – SPA, componentes y Hooks

1. Creación del proyecto con Vite y React 19.
2. Creación de componentes con JSX, separados en `components/` (`Resumen`, `NavBar`, `SolicitudCard`) y `pages/`.
3. `SolicitudCard` recibe la solicitud por props y la muestra como tarjeta reutilizable.
4. `NuevaSolicitud` usa `useState` para los campos del formulario, con validación de longitud mínima y mensajes de error.
5. `ListadoSolicitudes` usa `useState` para el filtro por estado y `useEffect` para recalcular la lista visible cuando cambian las solicitudes o el filtro.

### Actividad 2 – React Router

1. Configuración de `BrowserRouter` en `main.jsx`.
2. Rutas definidas en `App.jsx`: `/`, `/solicitudes`, `/solicitudes/nueva`, `/solicitudes/:id`, `/acerca` y una ruta comodín `*`.
3. Navegación con `NavLink` en la barra superior, que marca la ruta activa.
4. `DetalleSolicitud` usa `useParams` para leer el `id` de la URL y muestra un mensaje si la solicitud no existe.
5. La ruta comodín muestra la página 404 (`NoEncontrada`).

### Actividad 3 – Context API

1. Creación del contexto `SolicitudesContext` con su `SolicitudesProvider`, que contiene la lista de solicitudes y las acciones `registrarSolicitud`, `cambiarEstado` y `eliminarSolicitud`.
2. Creación del hook `useSolicitudes`, que encapsula `useContext` y lanza un error si se usa fuera del Provider.
3. `SolicitudesProvider` envuelve la aplicación en `main.jsx`, dentro de `BrowserRouter`.
4. Consumers: `Resumen` (contadores en el encabezado), `Inicio`, `ListadoSolicitudes`, `DetalleSolicitud` y `NuevaSolicitud`.
5. Prueba manual del flujo, comprobando que los contadores se actualizan en todas las vistas sin recargar la página.

### Actividad 4 – Redux

1. Creación de la carpeta `src/redux/` con el store (`store.js`) y un slice (`favoritosSlice.js`).
2. El slice `idsFavoritos` guarda los ids de las solicitudes marcadas como favoritas. Se eligió Redux para este dato porque se muestra en un lugar distinto a donde se modifica (el contador de la barra superior y las tarjetas) y no depende de los datos de las solicitudes.
3. El store se conecta a la aplicación con `Provider` de `react-redux` en `main.jsx`.
4. Los componentes leen el estado con `useSelector` y modifican el estado con `dispatch(alternarFavorito(id))`.

### Estructura del proyecto

```
src/
├── main.jsx                      # BrowserRouter, Provider de Redux y SolicitudesProvider
├── App.jsx                       # Rutas (Actividad 2)
├── App.css / index.css           # Estilos
├── context/
│   └── SolicitudesContext.jsx    # Provider y hook useSolicitudes (Actividad 3)
├── redux/
│   ├── store.js                  # configureStore (Actividad 4)
│   └── favoritosSlice.js         # slice de favoritos (Actividad 4)
├── data/
│   └── solicitudesSeed.js        # datos simulados y listas de opciones
├── components/
│   ├── NavBar.jsx                # barra de navegación con NavLink (Actividades 2 y 4)
│   ├── Resumen.jsx               # contadores del encabezado (Actividad 3)
│   └── SolicitudCard.jsx         # tarjeta con props (Actividades 1 y 4)
└── pages/
    ├── Inicio.jsx
    ├── ListadoSolicitudes.jsx    # useState y useEffect (Actividad 1)
    ├── NuevaSolicitud.jsx        # formulario controlado con useState (Actividad 1)
    ├── DetalleSolicitud.jsx      # useParams (Actividad 2)
    └── NoEncontrada.jsx          # página 404 (Actividad 2)
```

### ¿Qué datos van al estado global y por qué?

- **Lista de solicitudes y sus acciones (Context API):** la leen y modifican varias vistas: el resumen del encabezado, el inicio, el listado, el detalle y el formulario. Pasarlos por props obligaría a hacer *prop drilling* por varios niveles.
- **Ids de favoritos (Redux):** se leen en la barra superior y en las tarjetas, y se modifican desde el listado y el detalle. Se dejó en Redux para comparar ambas herramientas dentro de la misma aplicación.
- **Campos del formulario y filtro del listado (`useState` local):** solo los necesita un componente. Subirlos al estado global provocaría renders innecesarios en todos los consumers.

## Context API vs Redux

Context API y Redux son herramientas utilizadas en React para compartir y administrar el estado entre diferentes componentes, evitando el uso excesivo de *Prop Drilling*.

### Comparación

| Característica     | Context API                              | Redux Toolkit                    |
| ------------------ | ---------------------------------------- | -------------------------------- |
| Integración        | Incluido en React                        | Biblioteca externa               |
| Instalación        | No requiere                              | Requiere dependencias            |
| Complejidad        | Baja                                     | Media                            |
| Gestión del estado | Context, useState y useReducer           | Store, Slices y Reducers         |
| Rendimiento        | Puede generar renderizados adicionales   | Permite suscripciones selectivas |
| Escalabilidad      | Ideal para estados compartidos sencillos | Adecuado para estados complejos  |
| Depuración         | Herramientas de React                    | Redux DevTools                   |

### Context API

* Permite compartir información entre componentes.
* Es sencillo de implementar y no requiere instalaciones adicionales.
* Es recomendable para estados globales simples, como usuarios, temas y preferencias.

### Redux Toolkit

* Centraliza el estado global de la aplicación mediante un Store.
* Organiza las actualizaciones mediante Actions y Reducers.
* Facilita la administración de estados complejos y ofrece herramientas avanzadas de depuración.

### Conclusión

Context API es una buena alternativa para proyectos pequeños o medianos que necesitan compartir información de manera sencilla. Por otro lado, Redux Toolkit resulta más conveniente para aplicaciones con múltiples estados, operaciones complejas y mayores necesidades de escalabilidad.

La elección dependerá de la complejidad y los requerimientos de cada proyecto.


## Cómo ejecutar o revisar

Requisitos: Node.js 18 o superior.

```bash
npm install
npm run dev
```

Abrir en el navegador la URL que muestra la terminal (normalmente http://localhost:5173).

Para verificar que el proyecto compila:

```bash
npm run build
```

### Cómo revisar el funcionamiento

1. **Inicio:** muestra el total de solicitudes y los pendientes.
2. **Listado:** los botones de filtro muestran solo las solicitudes del estado elegido. La estrella de cada tarjeta marca o desmarca favoritos, y el contador de la barra superior cambia.
3. **Detalle:** al abrir una solicitud desde el listado, se muestra su información. Desde ahí se puede marcar como favorita o aprobar si está pendiente.
4. **Nueva solicitud:** al enviar un formulario válido, la solicitud aparece en el listado con estado Pendiente y los contadores del encabezado se actualizan.
5. **Context vs Redux:** muestra la comparación entre ambas herramientas.
6. **Ruta inexistente:** cualquier URL no definida muestra la página 404.

## Evidencias

Las capturas están en la carpeta [`evidencias/`].

- Estado inicial de los contadores: `evidencias/01-estado-inicial.png`
- Solicitud registrada: `evidencias/02-solicitud-registrada.png`
- Solicitud aprobada: `evidencias/03-solicitud-aprobada.png`
- Listado con filtros: `evidencias/04-listado-filtros.png`

## Conclusiones

- Se construyó una SPA en React que cambia de vista sin recargar la página, con estructura de componentes y uso verificable de `useState` y `useEffect`.
- React Router permitió separar las vistas del caso, incluyendo una ruta con parámetro para el detalle.
- Context API resultó suficiente y simple para compartir la lista de solicitudes entre varias vistas, evitando pasar datos manualmente por múltiples niveles de componentes.
- Redux Toolkit mostró el flujo explícito de acciones y reducers sobre una necesidad acotada, a costa de más código; para este tamaño de proyecto, Context API es la opción más económica.
- Elegir bien dónde vive cada dato (estado local, contexto o Redux) fue una decisión clave: no todo el estado debe ser global.
- Dejar los datos simulados aislados en un solo módulo prepara el siguiente paso, que será conectar la SPA con una API real.

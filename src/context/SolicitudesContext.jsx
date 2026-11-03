import { createContext, useContext, useState } from "react";

/**
 * ACTIVIDAD 3 - Estado global con Context API
 *
 * Datos que viven en el estado global (y por qué):
 *  - solicitudes: la lista la leen y modifican varias vistas (listado,
 *    formulario, inicio y resumen del navbar).
 *  - agregarSolicitud / cambiarEstado / eliminarSolicitud: las acciones se
 *    exponen junto al estado para que todas las vistas actualicen la misma
 *    fuente de verdad.
 *
 * Datos que NO se suben al contexto:
 *  - Los campos de texto del formulario: solo le importan a ese componente
 *    (estado local con useState).
 */

const SolicitudesContext = createContext(null);

const DATOS_INICIALES = [
  { id: 1, tipo: "Constancia de estudios", estudiante: "Ana Torres", estado: "Pendiente" },
  { id: 2, tipo: "Retiro de curso", estudiante: "Luis Rojas", estado: "Aprobada" },
  { id: 3, tipo: "Cambio de sección", estudiante: "Marta Díaz", estado: "Pendiente" },
  { id: 4, tipo: "Reserva de matrícula", estudiante: "Diego Salas", estado: "Rechazada" },
];

export function SolicitudesProvider({ children }) {
  const [solicitudes, setSolicitudes] = useState(DATOS_INICIALES);

  const agregarSolicitud = ({ tipo, estudiante }) => {
    setSolicitudes((prev) => [
      ...prev,
      { id: Date.now(), tipo, estudiante, estado: "Pendiente" },
    ]);
  };

  const cambiarEstado = (id, nuevoEstado) => {
    setSolicitudes((prev) =>
      prev.map((s) => (s.id === id ? { ...s, estado: nuevoEstado } : s))
    );
  };

  const eliminarSolicitud = (id) => {
    setSolicitudes((prev) => prev.filter((s) => s.id !== id));
  };

  const value = { solicitudes, agregarSolicitud, cambiarEstado, eliminarSolicitud };

  return (
    <SolicitudesContext.Provider value={value}>
      {children}
    </SolicitudesContext.Provider>
  );
}

// Hook personalizado: encapsula useContext y valida el uso correcto.
export function useSolicitudes() {
  const context = useContext(SolicitudesContext);
  if (!context) {
    throw new Error("useSolicitudes debe usarse dentro de <SolicitudesProvider>");
  }
  return context;
}

import { createContext, useContext, useState } from 'react';
import { solicitudesIniciales } from '../data/solicitudesSeed';

/**
 * ACTIVIDAD 3 - Estado global con Context API
 *
 * Va al contexto: la lista de solicitudes y sus acciones, porque las usan
 * el resumen del encabezado, el inicio, el listado, el detalle y el formulario.
 * No va al contexto: los campos del formulario (useState local) y el filtro
 * del listado (useState local), porque solo los usa un componente.
 */

const SolicitudesContext = createContext(null);

export function SolicitudesProvider({ children }) {
  const [solicitudes, setSolicitudes] = useState(solicitudesIniciales);

  const registrarSolicitud = (datos) => {
    setSolicitudes((prev) => [
      ...prev,
      {
        ...datos,
        id: Date.now(),
        estado: 'Pendiente',
        fechaRegistro: new Date().toISOString(),
      },
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

  const value = { solicitudes, registrarSolicitud, cambiarEstado, eliminarSolicitud };

  return (
    <SolicitudesContext.Provider value={value}>
      {children}
    </SolicitudesContext.Provider>
  );
}

export function useSolicitudes() {
  const context = useContext(SolicitudesContext);
  if (!context) {
    throw new Error('useSolicitudes debe usarse dentro de <SolicitudesProvider>');
  }
  return context;
}

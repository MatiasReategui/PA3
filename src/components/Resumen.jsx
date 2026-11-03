import { useSolicitudes } from "../context/SolicitudesContext";

// CONSUMER 1: se actualiza solo cuando cambia el estado global,
// sin recibir props desde ningún componente padre.
export default function Resumen() {
  const { solicitudes } = useSolicitudes();

  const total = solicitudes.length;
  const pendientes = solicitudes.filter((s) => s.estado === "Pendiente").length;
  const aprobadas = solicitudes.filter((s) => s.estado === "Aprobada").length;
  const rechazadas = solicitudes.filter((s) => s.estado === "Rechazada").length;

  return (
    <div className="resumen" aria-label="Resumen de solicitudes">
      <span>Total: <strong>{total}</strong></span>
      <span>Pendientes: <strong>{pendientes}</strong></span>
      <span>Aprobadas: <strong>{aprobadas}</strong></span>
      <span>Rechazadas: <strong>{rechazadas}</strong></span>
    </div>
  );
}

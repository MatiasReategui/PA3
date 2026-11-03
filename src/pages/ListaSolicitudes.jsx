import { useSolicitudes } from "../context/SolicitudesContext";

// CONSUMER 3: lee la lista y ejecuta acciones que modifican el estado global.
export default function ListaSolicitudes() {
  const { solicitudes, cambiarEstado, eliminarSolicitud } = useSolicitudes();

  return (
    <section>
      <h1>Solicitudes</h1>

      {solicitudes.length === 0 ? (
        <p className="vacio">No hay solicitudes registradas.</p>
      ) : (
        <ul className="lista">
          {solicitudes.map((s) => (
            <li key={s.id}>
              <div>
                <strong>{s.tipo}</strong>
                <div className="sub">{s.estudiante}</div>
              </div>
              <div className="acciones">
                <span className={`estado ${s.estado.toLowerCase()}`}>{s.estado}</span>
                {s.estado === "Pendiente" && (
                  <>
                    <button onClick={() => cambiarEstado(s.id, "Aprobada")}>Aprobar</button>
                    <button className="secundario" onClick={() => cambiarEstado(s.id, "Rechazada")}>
                      Rechazar
                    </button>
                  </>
                )}
                <button className="peligro" onClick={() => eliminarSolicitud(s.id)}>
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

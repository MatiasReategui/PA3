import { Link } from 'react-router-dom';
import { useSolicitudes } from '../context/SolicitudesContext';

export default function Inicio() {
  const { solicitudes, cargando } = useSolicitudes();

  // useState + useEffect derivado: ejemplo adicional de Hooks dentro de un componente
  // de página, calculando un resumen a partir del estado global del Context.
  const totalPendientes = solicitudes.filter((s) => s.estado === 'Pendiente').length;

  return (
    <section className="pagina-inicio">
      <h1>Plataforma de Gestión de Solicitudes Académicas</h1>
      <p>
        SPA construida con React.js, JSX, componentes, Hooks (useState/useEffect),
        React Router, Context API y una introducción básica a Redux.
      </p>

      {cargando ? (
        <p>Cargando resumen…</p>
      ) : (
        <div className="tarjetas-resumen">
          <div className="resumen-item">
            <strong>{solicitudes.length}</strong>
            <span>Solicitudes registradas</span>
          </div>
          <div className="resumen-item">
            <strong>{totalPendientes}</strong>
            <span>Pendientes de revisión</span>
          </div>
        </div>
      )}

      <Link to="/solicitudes" className="btn-primario">Ver listado completo</Link>
    </section>
  );
}

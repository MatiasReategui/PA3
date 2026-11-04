import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSolicitudes } from '../context/SolicitudesContext';
import { ESTADOS_SOLICITUD } from '../data/solicitudesSeed';
import SolicitudCard from '../components/SolicitudCard';

export default function ListadoSolicitudes() {
  const { solicitudes, cargando } = useSolicitudes();

  // useState: estado local de este componente (el filtro solo le importa a esta vista,
  // por lo tanto NO se sube al estado global de Context ni de Redux).
  const [filtroEstado, setFiltroEstado] = useState('Todos');
  const [visibles, setVisibles] = useState([]);

  // useEffect: recalcula la lista visible cada vez que cambian las solicitudes del
  // Context o el filtro local seleccionado por el usuario.
  useEffect(() => {
    if (filtroEstado === 'Todos') {
      setVisibles(solicitudes);
    } else {
      setVisibles(solicitudes.filter((s) => s.estado === filtroEstado));
    }
  }, [solicitudes, filtroEstado]);

  return (
    <section className="pagina-listado">
      <header className="cabecera">
        <h2>Solicitudes académicas</h2>
        <Link to="/solicitudes/nueva" className="btn-primario">+ Nueva solicitud</Link>
      </header>

      <div className="filtros">
        <button
          className={filtroEstado === 'Todos' ? 'activo' : ''}
          onClick={() => setFiltroEstado('Todos')}
        >
          Todos ({solicitudes.length})
        </button>
        {ESTADOS_SOLICITUD.map((estado) => (
          <button
            key={estado}
            className={filtroEstado === estado ? 'activo' : ''}
            onClick={() => setFiltroEstado(estado)}
          >
            {estado}
          </button>
        ))}
      </div>

      {cargando ? (
        <p>Cargando solicitudes…</p>
      ) : (
        <ul className="tarjetas">
          {visibles.map((solicitud) => (
            <SolicitudCard key={solicitud.id} solicitud={solicitud} />
          ))}
        </ul>
      )}

      {!cargando && visibles.length === 0 && <p>No hay solicitudes con este estado.</p>}
    </section>
  );
}

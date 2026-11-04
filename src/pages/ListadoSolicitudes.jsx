import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSolicitudes } from '../context/SolicitudesContext';
import { ESTADOS_SOLICITUD } from '../data/solicitudesSeed';
import SolicitudCard from '../components/SolicitudCard';

export default function ListadoSolicitudes() {
  const { solicitudes } = useSolicitudes();

  // useState: el filtro solo le importa a esta vista, por eso no va al contexto.
  const [filtroEstado, setFiltroEstado] = useState('Todos');
  const [visibles, setVisibles] = useState([]);

  // useEffect: recalcula la lista visible cuando cambian las solicitudes
  // del Context o el filtro seleccionado.
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

      <ul className="tarjetas">
        {visibles.map((solicitud) => (
          <SolicitudCard key={solicitud.id} solicitud={solicitud} />
        ))}
      </ul>

      {visibles.length === 0 && <p>No hay solicitudes con este estado.</p>}
    </section>
  );
}

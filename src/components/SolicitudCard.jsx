import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { alternarFavorito } from '../redux/favoritosSlice';

export default function SolicitudCard({ solicitud }) {
  const dispatch = useDispatch();
  const esFavorito = useSelector((estado) => estado.idsFavoritos.includes(solicitud.id));

  return (
    <li className="tarjeta">
      <div className="tarjeta-cabecera">
        <Link to={`/solicitudes/${solicitud.id}`} className="tarjeta-titulo">
          #{solicitud.id} · {solicitud.titulo}
        </Link>
        <button
          className={`boton-favorito ${esFavorito ? 'activo' : ''}`}
          onClick={() => dispatch(alternarFavorito(solicitud.id))}
          aria-label="Marcar como favorito"
        >
          {esFavorito ? '★' : '☆'}
        </button>
      </div>
      <span className="estudiante">{solicitud.estudianteNombre}</span>
      <p className="descripcion">{solicitud.descripcion}</p>
      <span className={`etiqueta-estado estado-${solicitud.estado.replace(/\s+/g, '-')}`}>
        {solicitud.estado}
      </span>
    </li>
  );
}

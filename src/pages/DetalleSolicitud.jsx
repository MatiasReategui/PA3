import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useSolicitudes } from '../context/SolicitudesContext';
import { alternarFavorito } from '../redux/favoritosSlice';

// Actividad 2: useParams lee el :id de la ruta /solicitudes/:id
export default function DetalleSolicitud() {
  const { id } = useParams();
  const idNumerico = Number(id);
  const { solicitudes, cambiarEstado } = useSolicitudes();
  const dispatch = useDispatch();
  const esFavorito = useSelector((estado) => estado.idsFavoritos.includes(idNumerico));

  const solicitud = solicitudes.find((s) => s.id === idNumerico);

  if (!solicitud) {
    return (
      <section>
        <h2>Solicitud no encontrada</h2>
        <Link to="/solicitudes">Volver al listado</Link>
      </section>
    );
  }

  return (
    <section className="pagina-detalle">
      <Link to="/solicitudes">← Volver al listado</Link>
      <h2>{solicitud.titulo}</h2>
      <p><strong>Estudiante:</strong> {solicitud.estudianteNombre}</p>
      <p><strong>Tipo:</strong> {solicitud.tipo}</p>
      <p><strong>Descripción:</strong> {solicitud.descripcion}</p>
      <p><strong>Estado:</strong> {solicitud.estado}</p>

      <div className="acciones">
        <button onClick={() => dispatch(alternarFavorito(idNumerico))}>
          {esFavorito ? '★ Quitar de favoritos' : '☆ Agregar a favoritos'}
        </button>
        {solicitud.estado === 'Pendiente' && (
          <button onClick={() => cambiarEstado(idNumerico, 'Aprobada')}>Aprobar</button>
        )}
      </div>
    </section>
  );
}

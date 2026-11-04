import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function NavBar() {
  // Lee del store de Redux solo para mostrar un contador de favoritos en la barra,
  // como ejemplo de un dato global que SÍ conviene manejar con Redux en vez de Context
  // (ver comparación en la página "Acerca").
  const cantidadFavoritos = useSelector((estado) => estado.idsFavoritos.length);

  return (
    <nav className="barra-navegacion">
      <span className="marca">🎓 Solicitudes Académicas · React SPA</span>
      <NavLink to="/" end>Inicio</NavLink>
      <NavLink to="/solicitudes">Listado</NavLink>
      <NavLink to="/solicitudes/nueva">Nueva solicitud</NavLink>
      <NavLink to="/acerca">Context vs Redux</NavLink>
      <span className="contador-favoritos">★ {cantidadFavoritos}</span>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { useSolicitudes } from "../context/SolicitudesContext";

// CONSUMER 2: muestra las últimas solicitudes registradas.
export default function Inicio() {
  const { solicitudes } = useSolicitudes();
  const recientes = [...solicitudes].slice(-3).reverse();

  return (
    <section>
      <h1>Gestión de solicitudes académicas</h1>
      <p>
        Registra solicitudes y revisa su estado. Todas las vistas comparten el
        mismo estado mediante Context API.
      </p>

      <h2>Últimas solicitudes</h2>
      {recientes.length === 0 ? (
        <p className="vacio">
          Aún no hay solicitudes. <Link to="/nueva">Registra la primera</Link>.
        </p>
      ) : (
        <ul className="lista">
          {recientes.map((s) => (
            <li key={s.id}>
              <span>{s.tipo} · {s.estudiante}</span>
              <span className={`estado ${s.estado.toLowerCase()}`}>{s.estado}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

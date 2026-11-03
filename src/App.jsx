import { NavLink, Route, Routes } from "react-router-dom";
import Resumen from "./components/Resumen";
import Inicio from "./pages/Inicio";
import ListaSolicitudes from "./pages/ListaSolicitudes";
import NuevaSolicitud from "./pages/NuevaSolicitud";

// Rutas mínimas para poder demostrar el estado global entre vistas.
// (La configuración completa de React Router corresponde a la Actividad 2.)
export default function App() {
  return (
    <>
      <header className="cabecera">
        <nav>
          <NavLink to="/" end>Inicio</NavLink>
          <NavLink to="/solicitudes">Solicitudes</NavLink>
          <NavLink to="/nueva">Nueva solicitud</NavLink>
        </nav>
        <Resumen />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/solicitudes" element={<ListaSolicitudes />} />
          <Route path="/nueva" element={<NuevaSolicitud />} />
        </Routes>
      </main>
    </>
  );
}

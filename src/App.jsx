import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Inicio from './pages/Inicio';
import ListadoSolicitudes from './pages/ListadoSolicitudes';
import NuevaSolicitud from './pages/NuevaSolicitud';
import DetalleSolicitud from './pages/DetalleSolicitud';
import AcercaComparacion from './pages/AcercaComparacion';
import './App.css';

// Actividad 2 — Navegación con React Router: se definen aquí las rutas principales del caso.
export default function App() {
  return (
    <>
      <NavBar />
      <main className="contenedor">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/solicitudes" element={<ListadoSolicitudes />} />
          <Route path="/solicitudes/nueva" element={<NuevaSolicitud />} />
          <Route path="/solicitudes/:id" element={<DetalleSolicitud />} />
          <Route path="/acerca" element={<AcercaComparacion />} />
          <Route path="*" element={<Inicio />} />
        </Routes>
      </main>
    </>
  );
}

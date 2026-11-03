import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSolicitudes } from "../context/SolicitudesContext";

// CONSUMER 4: solo usa la acción agregarSolicitud del contexto.
// Los campos del formulario son estado LOCAL (no se suben al contexto).
export default function NuevaSolicitud() {
  const { agregarSolicitud } = useSolicitudes();
  const navigate = useNavigate();
  const [tipo, setTipo] = useState("");
  const [estudiante, setEstudiante] = useState("");
  const [error, setError] = useState("");

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (!tipo.trim() || !estudiante.trim()) {
      setError("Completa el tipo de solicitud y el nombre del estudiante.");
      return;
    }
    agregarSolicitud({ tipo: tipo.trim(), estudiante: estudiante.trim() });
    navigate("/solicitudes");
  };

  return (
    <section>
      <h1>Nueva solicitud</h1>
      <form onSubmit={manejarEnvio} className="formulario">
        <label>
          Tipo de solicitud
          <input
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            placeholder="Ej. Constancia de estudios"
          />
        </label>
        <label>
          Estudiante
          <input
            value={estudiante}
            onChange={(e) => setEstudiante(e.target.value)}
            placeholder="Nombre completo"
          />
        </label>
        {error && <p className="error" role="alert">{error}</p>}
        <button type="submit">Registrar solicitud</button>
      </form>
    </section>
  );
}

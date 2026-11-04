import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSolicitudes } from '../context/SolicitudesContext';
import { TIPOS_SOLICITUD } from '../data/solicitudesSeed';

export default function NuevaSolicitud() {
  const { registrarSolicitud } = useSolicitudes();
  const navigate = useNavigate();

  // useState: estado local del formulario (controlado). No necesita Context ni Redux
  // porque solo le interesa a este componente mientras el usuario está escribiendo.
  const [form, setForm] = useState({
    estudianteNombre: '',
    tipo: TIPOS_SOLICITUD[0],
    titulo: '',
    descripcion: ''
  });
  const [errores, setErrores] = useState({});
  const [enviado, setEnviado] = useState(false);

  const actualizarCampo = (campo, valor) => {
    setForm((actual) => ({ ...actual, [campo]: valor }));
  };

  const validar = () => {
    const nuevosErrores = {};
    if (form.estudianteNombre.trim().length < 3) {
      nuevosErrores.estudianteNombre = 'El nombre debe tener al menos 3 caracteres.';
    }
    if (form.titulo.trim().length < 5) {
      nuevosErrores.titulo = 'El título debe tener al menos 5 caracteres.';
    }
    if (form.descripcion.trim().length < 15) {
      nuevosErrores.descripcion = 'La descripción debe tener al menos 15 caracteres.';
    }
    setErrores(nuevosErrores);
    return Object.keys(nuevosErrores).length === 0;
  };

  const manejarEnvio = (evento) => {
    evento.preventDefault();
    if (!validar()) return;

    registrarSolicitud(form);
    setEnviado(true);
    setTimeout(() => navigate('/solicitudes'), 800);
  };

  return (
    <section className="pagina-formulario">
      <h2>Registrar nueva solicitud</h2>

      <form onSubmit={manejarEnvio} noValidate>
        <div className="campo">
          <label htmlFor="estudianteNombre">Nombre del estudiante</label>
          <input
            id="estudianteNombre"
            type="text"
            value={form.estudianteNombre}
            onChange={(e) => actualizarCampo('estudianteNombre', e.target.value)}
          />
          {errores.estudianteNombre && <small className="error">{errores.estudianteNombre}</small>}
        </div>

        <div className="campo">
          <label htmlFor="tipo">Tipo de solicitud</label>
          <select
            id="tipo"
            value={form.tipo}
            onChange={(e) => actualizarCampo('tipo', e.target.value)}
          >
            {TIPOS_SOLICITUD.map((tipo) => (
              <option key={tipo} value={tipo}>{tipo}</option>
            ))}
          </select>
        </div>

        <div className="campo">
          <label htmlFor="titulo">Título</label>
          <input
            id="titulo"
            type="text"
            value={form.titulo}
            onChange={(e) => actualizarCampo('titulo', e.target.value)}
          />
          {errores.titulo && <small className="error">{errores.titulo}</small>}
        </div>

        <div className="campo">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            id="descripcion"
            rows={4}
            value={form.descripcion}
            onChange={(e) => actualizarCampo('descripcion', e.target.value)}
          />
          {errores.descripcion && <small className="error">{errores.descripcion}</small>}
        </div>

        <button type="submit">Registrar solicitud</button>
        {enviado && <p className="mensaje-exito">Solicitud registrada. Redirigiendo…</p>}
      </form>
    </section>
  );
}

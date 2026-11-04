// Datos locales/simulados del caso "Plataforma de Gestión de Solicitudes Académicas".
// Conforme a la nota curricular de la PA3, no se consume ninguna API con Axios todavía
// (eso corresponde a la sesión 11); esta etapa se enfoca en React, Hooks, Router,
// Context API y una introducción básica a Redux.

export const TIPOS_SOLICITUD = [
  'Constancia de estudios',
  'Rectificación de nota',
  'Traslado interno',
  'Retiro de curso',
  'Convalidación'
];

export const ESTADOS_SOLICITUD = ['Pendiente', 'En revisión', 'Aprobada', 'Rechazada'];

export const solicitudesIniciales = [
  {
    id: 1,
    titulo: 'Constancia de matrícula 2026-II',
    tipo: 'Constancia de estudios',
    estudianteNombre: 'Valeria Campos',
    descripcion: 'Solicito constancia de matrícula vigente para trámite de media beca.',
    fechaRegistro: '2026-10-05T10:00:00.000Z',
    estado: 'Aprobada'
  },
  {
    id: 2,
    titulo: 'Rectificación de nota - Base de Datos II',
    tipo: 'Rectificación de nota',
    estudianteNombre: 'Jorge Huamán',
    descripcion: 'La nota del examen final no coincide con la publicada por el docente.',
    fechaRegistro: '2026-10-08T15:30:00.000Z',
    estado: 'En revisión'
  },
  {
    id: 3,
    titulo: 'Traslado de sede Lima Centro a San Isidro',
    tipo: 'Traslado interno',
    estudianteNombre: 'Daniela Ortiz',
    descripcion: 'Solicito traslado por motivos laborales desde el próximo periodo.',
    fechaRegistro: '2026-10-12T09:15:00.000Z',
    estado: 'Pendiente'
  },
  {
    id: 4,
    titulo: 'Retiro del curso Programación Web II',
    tipo: 'Retiro de curso',
    estudianteNombre: 'Renzo Salazar',
    descripcion: 'Solicito retiro justificado por incompatibilidad de horario laboral.',
    fechaRegistro: '2026-10-15T18:45:00.000Z',
    estado: 'Rechazada'
  },
  {
    id: 5,
    titulo: 'Convalidación de curso de Estadística',
    tipo: 'Convalidación',
    estudianteNombre: 'Camila Reyes',
    descripcion: 'Solicito convalidar el curso llevado en universidad de origen.',
    fechaRegistro: '2026-10-20T12:00:00.000Z',
    estado: 'Pendiente'
  }
];

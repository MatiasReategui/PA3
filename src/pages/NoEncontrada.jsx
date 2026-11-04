import { Link } from 'react-router-dom';

export default function NoEncontrada() {
  return (
    <section>
      <h1>404 - Página no encontrada</h1>
      <Link to="/">Volver al inicio</Link>
    </section>
  );
}
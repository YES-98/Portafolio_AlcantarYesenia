export default function Emonical() {
  return (
    <div className="container py-5">
      <h1>Emonical</h1>
      <img
        src="https://picsum.photos/seed/emo/1200/350"
        alt="Emonical banner"
        className="img-fluid rounded mb-3"
      />
      <p>
        Chatbot gestor emocional con realidad aumentada y un panel web de administración.
        Este proyecto combina IA, RA y un dashboard para profesionales de la salud.
      </p>

      <h3>Características</h3>
      <ul>
        <li>🤖 Procesamiento de lenguaje natural</li>
        <li>🕶️ Ejercicios en realidad aumentada</li>
        <li>📊 Panel de métricas y seguimiento</li>
        <li>🔐 Seguridad y autenticación</li>
      </ul>

      <a
        href="https://github.com/YES-98/emonical"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-dark"
      >
        Ver en GitHub
      </a>
    </div>
  );
}

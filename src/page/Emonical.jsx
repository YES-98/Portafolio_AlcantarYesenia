const Emonical = () => {
  return (
    <div className="project-page">
      <h1>Emonical</h1>
      <img 
        src="https://picsum.photos/seed/emo/1200/350" 
        alt="Emonical banner" 
        className="banner"
      />
      
      <p className="description">
        Chatbot gestor emocional con realidad aumentada y un panel web de administración.
        Se integra con APIs de inteligencia artificial y permite a los usuarios interactuar 
        en un entorno inmersivo con soporte para profesionales de la salud.
      </p>

      <section className="features">
        <h2>Características principales</h2>
        <ul>
          <li>🤖 Procesamiento de lenguaje natural (NLP) para chat en tiempo real</li>
          <li>🕶️ Módulo de realidad aumentada para ejercicios guiados</li>
          <li>📊 Panel web con métricas de usuarios y progreso</li>
          <li>🔐 Gestión segura de cuentas y accesos</li>
        </ul>
      </section>

      <section className="extra">
        <h2>Tecnologías usadas</h2>
        <p>React, Node.js, Firebase, APIs de IA, Three.js (para RA).</p>
      </section>

      <a 
        href="https://github.com/YES-98/emonical" 
        target="_blank" 
        rel="noopener noreferrer"
        className="btn"
      >
        Ver en GitHub
      </a>
    </div>
  );
};

export default Emonical;

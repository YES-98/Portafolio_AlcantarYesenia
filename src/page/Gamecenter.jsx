import { useEffect } from "react";
import "./GameCenter.css"
export default function GameCenter() {
  useEffect(() => {
    const revealElements = document.querySelectorAll(".scroll-reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach(el => observer.observe(el));
    return () => revealElements.forEach(el => observer.unobserve(el));
  }, []);

  return (
    <div className="container py-5 text-white">
      <header className="mb-5 text-center scroll-reveal">
        <h1 className="ux-title">Game Center</h1>
        <img
          src="/images/utom.jpg"
          alt="GameCenter banner"
          className="img-fluid rounded shadow mt-3 ux-banner"
        />
      </header>

      <section className="mb-5 scroll-reveal ux-section">
        <h2 className="ux-subtitle">🧪 Plan de Pruebas – Game Center</h2>
        <ul className="list-unstyled ux-meta">
          <li><strong>Autora:</strong> Yesenia Alcantar Rodríguez</li>
          <li><strong>Universidad:</strong> UTOM – Universidad Tecnológica del Oriente de Michoacán</li>
          <li><strong>Fecha:</strong> 29 de enero de 2025</li>
          <li><strong>Área:</strong> Administración en Base de Datos</li>
        </ul>
      </section>

      <section className="mb-5 scroll-reveal ux-section">
        <h3 className="ux-heading">🎯 Objetivo</h3>
        <p>
          Garantizar la calidad del prototipo Game Center mediante pruebas técnicas y de experiencia de usuario.
          Esta fase permitió detectar errores, corregirlos oportunamente y asegurar la estabilidad del sistema antes de su entrega final.
        </p>
      </section>

      <section className="mb-5 scroll-reveal ux-section">
        <h3 className="ux-heading">🔍 Tipos de Pruebas Realizadas</h3>
     

        <div className="mb-3">
          <h5 className="ux-label">📈 Pruebas de Carga</h5>
          <ul>
     
            <li>Evaluación del rendimiento bajo estrés</li>
            <li>Resultado esperado: estabilidad sin caídas ni demoras excesivas</li>
          </ul>
        </div>

        <div className="mb-3">
          <h5 className="ux-label">👥 Pruebas de Usabilidad</h5>
          <ul>
            <li>Ejecución con usuarios de distintos perfiles</li>
            <li>Evaluación de claridad, facilidad de uso y satisfacción general</li>
          </ul>
        </div>

    
      </section>

      <section className="mb-5 scroll-reveal ux-section">
        <h3 className="ux-heading">🧩 Observación de Diseño</h3>
        <p>
          Aunque Game Center no se consolidó como un producto con diseño final completo, su desarrollo técnico y fase de pruebas
          aportaron mejoras clave a otros módulos y proyectos derivados. El enfoque en integración, rendimiento y experiencia de usuario
          sirvió como base para optimizar componentes reutilizables en futuras implementaciones.
        </p>
      </section>

      <section className="mb-5 scroll-reveal ux-section">
        <h3 className="ux-heading">✅ Conclusión</h3>
        <p>
        El desarrollo del sistema Game Center permitió explorar una arquitectura modular enfocada en la experiencia gamer, integrando componentes como rankings dinámicos, automatización de torneos y conexión con plataformas externas. Aunque el diseño visual no fue finalizado como producto completo, su estructura técnica y pruebas de validación sirvieron como base para mejorar otros proyectos.   </p>
      </section>

      <div className="text-center scroll-reveal">
        <a
          href="https://github.com/YES-98/GameCenter.git"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-neon px-4 py-2"
        >
          🚀 Ver en GitHub
        </a>
      </div>
    </div>
  );
}

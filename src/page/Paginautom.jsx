import { useEffect, useState } from "react";
import "./PaginaUtom.css";

export default function Paginautom() {
  const [showMeta, setShowMeta] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowMeta(true), 500);
  }, []);

  return (
    <div
      className="section scroll-reveal visible"

    >
      <header className="text-center mb-4">
        <p></p>
        <h1 className="title">Página web UTOM</h1>
        <img
          src="/images/entrada.jpg"
          alt="Banner promocional UTOM"
          className="banner"
        />
      </header>

      <section>
        <h2 className="subtitle">¿Cuál es el objetivo de este proyecto?</h2>
        <p>
          La función por la que fue desarrollada es <strong>promover y dar a conocer</strong> la Universidad Tecnológica de Oriente de Michoacán (UTOM), destacando su oferta educativa, valores institucionales y oportunidades para estudiantes actuales y futuros.
        </p>
      </section>

      <section className="side-by-side">
        <div className="column">
          <h2 className="subtitle">🎯 Contenido clave</h2>
          <div className="grid">
            <div className="block">Diseño responsivo</div>
            <div className="block">Estilo institucional</div>
            <div className="block">Animaciones suaves</div>
            <div className="block">HTML y CSS </div>
          </div>
        </div>

        <div className="column">
          <h2 className="subtitle">🎨 Diseño y Tecnología</h2>
          <div className="grid">
            <div className="block">Historia y misión de la UTOM</div>
            <div className="block">Carreras y perfiles profesionales</div>
            <div className="block">Requisitos de ingreso</div>
            <div className="block">Eventos académicos y culturales</div>
            <div className="block">Contacto y ubicación</div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="subtitle">💡 Valor Agregado</h2>
        <p>
          Esta página no solo informa, sino que <strong>transmite el espíritu académico y profesional</strong> de la UTOM. Su diseño modular permite futuras integraciones como noticias, becas o testimonios de estudiantes.
        </p>
      </section>

      <div className="text-center mt-4">
        <a
          href="https://github.com/YES-98/emonical"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark"
        >
          Ver en GitHub
        </a>
      </div>
    </div>
  );
}
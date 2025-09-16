import { useState } from "react";
import { projects } from "./data/projects"; // 👈 corregida la ruta

const Projects = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (id) => {
    setSelected(selected === id ? null : id); // abre/cierra
  };

  return (
    <div className="projects-container">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          <h2>{project.title}</h2>
          <img src={project.img} alt={project.title} />
          <p>{project.description}</p>

          <button onClick={() => handleClick(project.id)}>
            {selected === project.id ? "Cerrar" : "Más info"}
          </button>

          {selected === project.id && (
            <div className="project-details">
              {project.id === 1 && (
                <p>
                  <strong>Emonical:</strong> Chatbot gestor emocional con RA,
                  panel web y conexión a APIs de IA.
                </p>
              )}
              {project.id === 2 && (
                <p>
                  <strong>Cremería Flor:</strong> Landing con catálogo, carrito
                  básico y diseño responsivo.
                </p>
              )}
              {project.id === 3 && (
                <p>
                  <strong>UTOM II:</strong> Portafolio institucional con modo oscuro.
                </p>
              )}

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Ver en GitHub/Demo
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Projects;

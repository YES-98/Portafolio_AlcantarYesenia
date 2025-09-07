// src/ProjectsCarousel.jsx
import { useId } from "react";

/**
 * Carrusel de proyectos (1 por slide).
 * Requiere que el bundle JS de Bootstrap esté importado en App.jsx:
 *   import 'bootstrap/dist/js/bootstrap.bundle.min.js';
 */
export default function ProjectsCarousel({ items = [] }) {
  const carouselId = `projects-${useId().replace(/:/g, "")}`;
  if (!items.length) return null;

  return (
    <div id={carouselId} className="carousel slide carousel-fade">
      <div className="carousel-inner rounded-3 overflow-hidden">
        {items.map((p, i) => (
          <div className={`carousel-item ${i === 0 ? "active" : ""}`} key={p.id ?? i}>
            <img src={p.img} className="d-block w-100 object-fit-cover" alt={p.title} />
            <div className="carousel-caption d-none d-md-block text-start bg-dark bg-opacity-50 rounded-3 p-3">
              <h5 className="mb-1">{p.title}</h5>
              <p className="mb-2">{p.description}</p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-sm btn-primary"
                >
                  Ver repositorio
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${carouselId}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>

      <div className="carousel-indicators">
        {items.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target={`#${carouselId}`}
            data-bs-slide-to={i}
            className={i === 0 ? "active" : ""}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

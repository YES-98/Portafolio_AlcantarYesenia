import { useId } from "react";

export default function ProjectsCarousel({ items = [] }) {
  const carouselId = `projects-${useId().replace(/:/g, "")}`;
  if (!items.length) return null;

  return (
    <div
      id={carouselId}
      className="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner rounded-3 overflow-hidden">
        {items.map((p, i) => (
          <div
            className={`carousel-item ${i === 0 ? "active" : ""}`}
            key={p.id ?? i}
          >
            {/* 🔹 Imagen responsiva */}
            <img
              src={p.img}
              className="d-block w-100 img-fluid object-fit-cover"
              style={{ maxHeight: "450px", objectFit: "cover" }}
              alt={p.title}
            />

            {/* 🔹 Texto adaptado según tamaño de pantalla */}
            <div className="carousel-caption text-start bg-dark bg-opacity-50 rounded-3 p-3">
              <h5 className="mb-1 fs-5 fs-md-4">{p.title}</h5>
              <p className="mb-2 d-none d-sm-block">{p.description}</p>

              <div className="d-flex flex-wrap gap-2 justify-content-start">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm bg-white text-dark border"
                  >
                    <i className="bi bi-github me-1"></i> Ver repositorio
                  </a>
                )}

                {/* 🔹 Botón nuevo que redirige a la ruta definida */}
                {p.route && (
                  <button
                    className="btn btn-sm"
                    style={{
                      background: "linear-gradient(to right, #2a9d8f, #007f5f)",
                      color: "#fff",
                      border: "none",
                    }}
                    onClick={() => (window.location.href = p.route)}
                  >
                    <i className="bi bi-arrow-right-circle me-1"></i> Más información
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 🔹 Botones de control */}
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

      {/* 🔹 Indicadores */}
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

import React, { useId } from "react";

// Fallback para que no se rompa el slide si la imagen falla
function ImgSafe({ src, alt }) {
  const [ok, setOk] = React.useState(true);
  return ok ? (
    <img
      src={src}
      className="d-block w-100 img-fluid"
      style={{ maxHeight: 450, objectFit: "cover" }}
      alt={alt}
      loading="lazy"
      onError={() => setOk(false)}
    />
  ) : (
    <div
      className="d-block w-100"
      style={{
        maxHeight: 450,
        aspectRatio: "16/9",
        display: "grid",
        placeItems: "center",
        background: "#f3f4f6",
        border: "1px dashed #d1d5db",
        borderRadius: 8,
      }}
    >
      <span className="text-muted small">Imagen no disponible</span>
    </div>
  );
}

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
            {/* Imagen con fallback */}
            <ImgSafe src={p.img} alt={p.title} />

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

                {p.route && (
                  <a
                    href={p.route}
                    className="btn btn-sm"
                    style={{
                      background: "linear-gradient(to right, #2a9d8f, #007f5f)",
                      color: "#fff",
                      border: "none",
                    }}
                  >
                    <i className="bi bi-arrow-right-circle me-1"></i> Más información
                  </a>
                )}
              </div>
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
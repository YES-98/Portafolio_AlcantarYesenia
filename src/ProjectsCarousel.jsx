import React, { useId } from "react";

// Fallback seguro para imágenes
function ImgSafe({ src, alt }) {
  const [ok, setOk] = React.useState(true);

  return ok ? (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setOk(false)}
      className="w-100 img-fluid object-cover rounded-3"
      style={{
        height: "auto",
        maxHeight: "60vh",
        objectFit: "cover",
        transition: "transform 0.4s ease-in-out",
      }}
    />
  ) : (
    <div
      className="d-flex justify-content-center align-items-center rounded-3"
      style={{
        height: "60vh",
        backgroundColor: "#f3f4f6",
        border: "1px dashed #d1d5db",
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
      {/* --- Contenedor principal --- */}
      <div className="carousel-inner rounded-3 overflow-hidden">
        {items.map((p, i) => (
          <div
            key={p.id ?? i}
            className={`carousel-item ${i === 0 ? "active" : ""}`}
          >
            <ImgSafe src={p.img} alt={p.title} />

            {/* --- Texto superpuesto --- */}
            <div
              className="carousel-caption text-start text-white p-3 p-md-4"
              style={{
                background: "rgba(0,0,0,0.45)",
                borderRadius: "0.75rem",
                backdropFilter: "blur(6px)",
              }}
            >
              <h5 className="fs-5 fw-semibold mb-1">{p.title}</h5>
              <p className="small d-none d-sm-block mb-3">{p.description}</p>

              <div className="d-flex flex-wrap gap-2">
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-light d-flex align-items-center gap-1"
                  >
                    <i className="bi bi-github"></i>
                    Repositorio
                  </a>
                )}

                {p.route && (
                  <a
                    href={p.route}
                    className="btn btn-sm text-white"
                    style={{
                      background:
                        "linear-gradient(90deg, #2a9d8f 0%, #007f5f 100%)",
                    }}
                  >
                    <i className="bi bi-arrow-right-circle"></i> Más info
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* --- Controles de navegación --- */}
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

      {/* --- Indicadores --- */}
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
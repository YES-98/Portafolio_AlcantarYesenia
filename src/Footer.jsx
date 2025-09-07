const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-5 pb-3">
      <div className="container">
        <div className="row gy-4">
          {/* Columna izquierda */}
          <div className="col-12 col-md-6">
            <h5>Contáctame</h5>
            <p className="mb-3">
              ¿Quieres colaborar o saber más sobre mis proyectos?
              <br />
              Escríbeme y te respondo con gusto.
            </p>
            <a
              href="mailto:tu.correo@ejemplo.com"
              className="btn btn-outline-light w-100 w-sm-auto"
            >
              <i className="bi bi-envelope me-2"></i> Enviar correo
            </a>
          </div>

          {/* Columna derecha */}
          <div className="col-12 col-md-6 text-center text-md-end">
            <div className="d-flex justify-content-center justify-content-md-end align-items-center gap-3">
              <a
                href="https://www.linkedin.com/in/yesenia-alcantar-rodriguez-6370492a6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/YES-98"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="mailto:yesyrdz126@gmail.com"
                className="text-light fs-4"
                aria-label="Correo"
              >
                <i className="bi bi-envelope-at"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center small">
          © {new Date().getFullYear()} Yesenia Alcantar — Portafolio
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// src/Nav.jsx
import { useEffect, useRef } from "react";
import "./Nav.css";

const Navbar = () => {
  const collapseRef = useRef(null);

  // Cerrar el menú al hacer clic en un link (en móvil)
  useEffect(() => {
    const el = collapseRef.current;
    if (!el) return;

    const handleClick = () => {
      if (window.bootstrap) {
        const instance =
          window.bootstrap.Collapse.getInstance(el) ||
          new window.bootstrap.Collapse(el, { toggle: false });
        instance.hide();
      } else {
        el.classList.remove("show");
      }
    };

    const links = el.querySelectorAll(".nav-link, .btn");
    links.forEach((a) => a.addEventListener("click", handleClick));
    return () => links.forEach((a) => a.removeEventListener("click", handleClick));
  }, []);

  return (
    <nav className="navbar navbar-expand-md navbar-dark custom-navbar fixed-top shadow-sm">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-semibold" href="#sobre-mi">
          Portafolio
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNavbar"
          aria-controls="mainNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links */}
        <div className="collapse navbar-collapse" id="mainNavbar" ref={collapseRef}>
          <ul className="navbar-nav ms-auto align-items-start align-items-md-center gap-2">
            <li className="nav-item">
              <a className="nav-link" href="#habilidades">Habilidades</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#proyectos">Proyectos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#herramientas">Herramientas</a>
            </li>
           
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

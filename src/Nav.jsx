// src/Nav.jsx
"use client";
import { useEffect, useRef, useState } from "react";
import "./Nav.css";

const Navbar = () => {
  const collapseRef = useRef(null);
  const togglerRef = useRef(null);
  const navRef = useRef(null);

  // Estado para auto-hide y sombra
  const [hidden, setHidden] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const [expanded, setExpanded] = useState(false); // aria-expanded
  const lastY = useRef(0);

  // Cerrar el menú al hacer clic en un link (en móvil)
  useEffect(() => {
    const el = collapseRef.current;
    if (!el) return;

    const handleClick = () => {
      // Cierra el collapse
      if (window.bootstrap) {
        const instance =
          window.bootstrap.Collapse.getInstance(el) ||
          new window.bootstrap.Collapse(el, { toggle: false });
        instance.hide();
      } else {
        el.classList.remove("show");
      }
      setExpanded(false);
    };

    const links = el.querySelectorAll(".nav-link, .btn");
    links.forEach((a) => a.addEventListener("click", handleClick));
    return () => links.forEach((a) => a.removeEventListener("click", handleClick));
  }, []);

  // Inicializar collapse y controlar el botón toggler manualmente (sin data-* para evitar doble toggle)
  useEffect(() => {
    const el = collapseRef.current;
    const btn = togglerRef.current;
    if (!el || !btn) return;

    let instance = null;
    if (window.bootstrap) {
      instance = window.bootstrap.Collapse.getOrCreateInstance(el, { toggle: false });
      // Sincroniza aria-expanded con eventos de Bootstrap
      const onShown = () => setExpanded(true);
      const onHidden = () => setExpanded(false);
      el.addEventListener("shown.bs.collapse", onShown);
      el.addEventListener("hidden.bs.collapse", onHidden);

      const onToggle = (e) => {
        e.preventDefault();
        // Mostrar siempre el navbar si estaba oculto por scroll
        setHidden(false);
        // Toggle
        if (el.classList.contains("show")) instance.hide();
        else instance.show();
      };

      btn.addEventListener("click", onToggle);
      return () => {
        btn.removeEventListener("click", onToggle);
        el.removeEventListener("shown.bs.collapse", onShown);
        el.removeEventListener("hidden.bs.collapse", onHidden);
      };
    } else {
      // Fallback sin Bootstrap JS
      const onToggle = (e) => {
        e.preventDefault();
        setHidden(false);
        el.classList.toggle("show");
        setExpanded(el.classList.contains("show"));
      };
      btn.addEventListener("click", onToggle);
      return () => btn.removeEventListener("click", onToggle);
    }
  }, []);

  // Medir la altura del navbar y fijarla como scroll-padding-top para los anchors
  useEffect(() => {
    const setHeightVar = () => {
      if (navRef.current) {
        const h = navRef.current.offsetHeight || 64;
        document.documentElement.style.setProperty("--navbar-height", `${h}px`);
      }
    };
    setHeightVar();
    window.addEventListener("resize", setHeightVar);
    return () => window.removeEventListener("resize", setHeightVar);
  }, []);

  // Auto-hide al hacer scroll
  useEffect(() => {
    const THRESHOLD = 8;

    const onScroll = () => {
      const y = Math.max(0, window.scrollY || window.pageYOffset);
      const diff = y - lastY.current;

      const menuOpen = collapseRef.current?.classList.contains("show");
      setAtTop(y < 8);

      if (!menuOpen) {
        if (Math.abs(diff) > THRESHOLD) {
          if (diff > 0 && y > 80) setHidden(true); // Bajando
          if (diff < 0) setHidden(false);          // Subiendo
        }
      }

      lastY.current = y;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`navbar navbar-expand-md navbar-dark custom-navbar fixed-top shadow-sm
        ${hidden ? "nav-hide" : ""} ${!atTop ? "nav-elevated" : ""}`}
    >
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand fw-semibold" href="#sobre-mi">
          Portafolio
        </a>

        {/* Toggler (sin data-*) */}
        <button
          ref={togglerRef}
          className="navbar-toggler"
          type="button"
          aria-controls="mainNavbar"
          aria-expanded={expanded}
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

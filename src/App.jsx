// src/App.jsx
import Nav from './Nav';
import Footer from './Footer';
import Skills from './skills';
import ProjectsCarousel from './ProjectsCarousel';
import { projects } from './projects';
import ToolsFancy from './ToolsFancy';

import lala from './assets/photo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';




function App() {
  return (
    <>
      <Nav />

      <main>
        {/* === SOBRE MÍ / HERO === */}
        <section id="sobre-mi" className="py-4 bg-light">
      
            <div className="row align-items-center justify-content-center gy-3 gx-md-5">
              {/* Avatar */}
              <div className="col-10 col-sm-8 col-md-4 text-center">
                <a
                  href="#"
                  aria-label="Abrir foto de perfil en una pestaña nueva"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={lala}
                    alt="Foto de Yesenia Alcantar"
                    className="img-thumbnail img-fluid"
                  />
                </a>
              </div>

              {/* Texto */}
              <div className="col-12 col-md-8 text-center text-md-start">
                <h1 className="h2 fw-bold mb-2">¡Hola! Soy Yesenia Alcantar</h1>
                <p className="lead mb-2">
                  Soy estudiante en la Universidad Tecnológica del Oriente de Michoacán. Me apasiona
                  el desarrollo y el diseño de interfaces, además de la gestión de información y otras
                  áreas de tecnologías.
                  </p>

                {/* Redes principales */}
                <div className="d-flex flex-wrap justify-content-center justify-content-md-start align-items-center gap-3 mt-1">
                  <a
                    href="https://www.linkedin.com/in/yesenia-alcantar-rodriguez-6370492a6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <i className="bi bi-linkedin fs-3"></i>
                  </a>
                  <a
                    href="https://github.com/YES-98"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-decoration-none"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <i className="bi bi-github fs-3"></i>
                  </a>
                </div>
              </div>
            </div>
      
        </section>
       
<Skills/>
<ToolsFancy/>
       <Route path="/proyectos" element={<ProjectsCarousel />} />
            </main>

      <Footer />
    </>
  );
}

export default App;

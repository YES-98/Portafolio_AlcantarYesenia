import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import Skills from './Skills';
import ProjectsCarousel from './ProjectsCarousel';
import { projects } from './projects';
import ToolsFancy from './ToolsFancy';
import FigmaGallery from './FigmaGallery';
import Emonical from "./page/Emonical";

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
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <section id="sobre-mi" className="py-4 bg-light">
                  <div className="row align-items-center justify-content-center gy-3 gx-md-5">
                    <div className="col-10 col-sm-8 col-md-4 text-center">
                      <img
                        src={lala}
                        alt="Foto de Yesenia Alcantar"
                        className="img-thumbnail img-fluid"
                      />
                    </div>
                    <div className="col-12 col-md-8 text-center text-md-start">
                      <h1 className="h2 fw-bold mb-2">¡Hola! Soy Yesenia Alcantar</h1>
                      <p className="lead mb-2">
                        Soy Técnica universitaria en el área de Desarrollo de Software Multiplataforma y estudiante 
                        en Ingeniería en Desarrollo y Gestión de Software en la UTOM. 
                        Me apasiona el desarrollo y el diseño de interfaces, además de la gestión 
                        de información y otras áreas de tecnologías.
                      </p>
                    </div>
                  </div>
                </section>

                <Skills />
                <ToolsFancy />

                <section id="proyectos" className="py-4">
                  <div className="container">
                    <h2 className="h3 fw-bold mb-3 text-center text-md-start">Proyectos</h2>
                    <ProjectsCarousel items={projects} />
                  </div>
                </section>

                <FigmaGallery />
              </>
            }
          />

          {/* Página de Emonical */}
          <Route path="/emonical" element={<Emonical />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import "./tolls.css"; // Importamos los estilos


import { Routes, Route } from "react-router-dom";
import Nav from './Nav';
import Footer from './Footer';
import Skills from './Skills';
import ProjectsCarousel from './ProjectsCarousel';
import { projects } from './projects';
import ToolsFancy from './ToolsFancy';
import FigmaGallery from './FigmaGallery';

import lala from './assets/photo.png';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 
import './App.css';
import GameCenter from './page/Gamecenter';
import Corazon_Mich from './page/Corazon_Mich';
import Paginautom from './page/Paginautom';

function App() {
  // Estado para saber si la barra está visible
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Función para manejar el scroll
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Si el scroll va hacia abajo, ocultamos la barra
        setIsVisible(false);
      } else {
        // Si el scroll va hacia arriba, mostramos la barra
        setIsVisible(true);
      }

      setLastScrollY(window.scrollY); // Actualizamos la última posición del scroll
    };

    // Agregar evento de scroll
    window.addEventListener("scroll", handleScroll);

    // Limpiar el evento al desmontar el componente
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <Nav isVisible={isVisible} />

      <main>
        <Routes>
          {/* Página principal */}
          <Route
            path="/"
            element={
              <>
                <section id="sobre-mi" className="py-4">
                  <div class="row align-items-center justify-content-center gy-3 gx-md-5 mt-5">
                    <div className="col-10 col-sm-8 col-md-4 text-center">
                      <img
                        src={lala}
                        alt="Foto de Yesenia Alcantar"
                        className="img-thumbnail img-fluid"
                      />
                    </div>
                    <div className="col-12 col-md-8 text-center text-md-start">
                      <h1 className="h2 fw-bold mb-2 text-white">¡Hola! Soy Yesenia Alcantar</h1>
                      <p className="lead mb-2 text-white">
                        Técnica universitaria en el Área de Desarrollo de Software Multiplataforma. Estudiante 
                        en Ingeniería de Desarrollo y Gestión de Software en la Universidad Tecnológica del Oriente de Michoacán. 
                        Apasionada en el desarrollo y el diseño de interfaces como diseñadora UX/UI Designer, además de la gestión 
                        de información y otras áreas de tecnologías.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Sección de habilidades */}
                <Skills />

                {/* Sección de herramientas */}
                <ToolsFancy />

                <section id="proyectos" className="py-4">
                  <div className="container">
                    <h2 className="h3 fw-bold mb-3 text-center text-md-start">Proyectos</h2>
                    <ProjectsCarousel items={projects} />
                  </div>
                </section>

                {/* Galería de Figma */}
                <FigmaGallery />
              </>
            }
          />

          
          <Route path="/Corazon_Mich" element={<Corazon_Mich />} />
          <Route path="/Gamecenter" element={<GameCenter />} />
          <Route path="/Paginautom" element={<Paginautom />} />

        </Routes>
      
      </main>

      <Footer />
    </>
  );
}

export default App;

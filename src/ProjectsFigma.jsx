// ProjectsFigma.jsx
import ProjectCard from "./ProjectCard";

const projects = [
 {
  title: "App de Finanzas",
  desc: "UI móvil con flujo de gastos e informes.",
  figmaFileUrl: "https://www.figma.com/proto/PZuFjU88MoNaMdKhjy24or/Game-School?node-id=2-7&p=f&t=SW52jN6UYUdi3a8U-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=2%3A7",
  figmaEmbedUrl: "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/community/file/1546567459828722327/Armony"
},
  {
    title: "E-commerce UI",
    desc: "Catálogo, filtros y checkout.",
    figmaFileUrl: "https://www.figma.com/file/YYYYY",
    figmaEmbedUrl:
      "https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/YYYYY"
  }
];

const ProjectsFigma = () => (
  <section id="proyectos" className="py-4">
    <div className="container">
      <h2 className="h3 fw-bold mb-3 text-center text-md-start">Proyectos</h2>
      <div className="row g-4">
        {projects.map((p, i) => (
          <div className="col-12 col-lg-6" key={i}>
            <ProjectCard {...p} />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsFigma;

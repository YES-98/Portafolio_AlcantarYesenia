// ProjectCard.jsx
import FigmaEmbed from "./FigmaEmbed";

const ProjectCard = ({ title, desc, figmaEmbedUrl, figmaFileUrl }) => (
  <article className="card h-100 shadow-sm">
    <div className="card-body">
      <h5 className="card-title mb-2">{title}</h5>
      <p className="text-muted small">{desc}</p>
      <FigmaEmbed embedUrl={figmaEmbedUrl} title={title} />
      <div className="d-flex gap-2 mt-3">
        <a className="btn btn-dark" href={figmaFileUrl} target="_blank" rel="noreferrer">
          Ver en Figma
        </a>
      </div>
    </div>
  </article>
);

export default ProjectCard;

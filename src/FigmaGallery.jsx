"use client";
import React, { useState } from "react";
import FigmaEmbed from "./FigmaEmbed"; // tu componente
import { figmaProjects } from "./figmaProjects"; // data (abajo)

// Construye la URL de embed para un frame específico (node-id)
function buildEmbedUrl({ fileKey, fileTitleInUrl }, nodeId) {
  const base = new URL(`https://www.figma.com/design/${fileKey}/${fileTitleInUrl}`);
  base.searchParams.set("node-id", nodeId);

  const embed = new URL("https://www.figma.com/embed");
  embed.searchParams.set("embed_host", "share");
  embed.searchParams.set("url", base.toString());
  return embed.toString();
}

export default function FigmaGallery({ projects = figmaProjects }) {
  const [active, setActive] = useState(null); // { project, frame, embedUrl }

  const open = (project, frame) => {
    setActive({
      project,
      frame,
      embedUrl: buildEmbedUrl(project, frame.nodeId),
    });
  };
  const close = () => setActive(null);

  return (
    <section id="figma-gallery" className="py-4">
      <div className="container">
        <h2 className="h3 fw-bold mb-3 text-center text-md-start">Galería Figma</h2>

        {projects.map((p) => (
          <div className="mb-5" key={p.name}>
            <h3 className="h5 fw-semibold mb-3">{p.name}</h3>

            <div className="row g-3">
              {p.frames.map((frame) => {
                const embedUrl = buildEmbedUrl(p, frame.nodeId);
                return (
                  <div className="col-12 col-sm-6 col-lg-4" key={frame.nodeId}>
                    <div className="card h-100 shadow-sm">
                      {/* Mini preview (embebido) */}
                      <div className="p-2">
                        <FigmaEmbed embedUrl={embedUrl} title={`${p.name} — ${frame.title || frame.nodeId}`} />
                      </div>

                      <div className="card-body d-flex justify-content-between align-items-center">
                        <div className="small text-muted text-truncate">
                          {frame.title || `Frame ${frame.nodeId}`}
                        </div>
                        <button
                          onClick={() => open(p, frame)}
                          className="btn btn-outline-primary btn-sm"
                        >
                          Ver grande
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            
          </div>
        ))}
      </div>

      {/* Modal para ver el frame en grande */}
      {active && (
        <>
          <div className="modal fade show d-block" tabIndex="-1" role="dialog" aria-modal="true">
            <div className="modal-dialog modal-xl modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">
                    {active.project.name} — {active.frame.title || active.frame.nodeId}
                  </h5>
                  <button type="button" className="btn-close" aria-label="Cerrar" onClick={close} />
                </div>
                <div className="modal-body">
                  <FigmaEmbed embedUrl={active.embedUrl} title="Figma preview grande" />
                </div>
              </div>
            </div>
          </div>
          {/* Backdrop */}
          <div className="modal-backdrop fade show" onClick={close}></div>
        </>
      )}
    </section>
  );
}

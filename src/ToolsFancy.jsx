// ToolsClear.jsx
const TOOLS = [
  { name: "Git & GitHub", icon: "bi-git", desc: "Versionado y flujo Git", color: "#ef4444" },
  { name: "Docker", icon: "bi-box-seam", desc: "Contenedores y DevOps", color: "#3b82f6" },
  { name: "Firebase", icon: "bi-cloud-arrow-up", desc: "Auth, DB y hosting", color: "#f59e0b" },
  { name: "Vercel", icon: "bi-rocket-takeoff", desc: "Deploys rápidos", color: "#8b5cf6" },
  { name: "Figma", icon: "bi-palette", desc: "UI/UX y prototipos", color: "#22c55e" },
  { name: "Illustrator", icon: "bi-palette", desc: "Diseño vectorial y UI/UX", color: "#ff9a00" },
];

function ToolsClear() {
  return (
    <section id="herramientas" className="py-5 bg-light">
      <div className="container">
        <h2 className="h3 fw-bold mb-4 text-center text-dark">Herramientas</h2>

        <div className="row g-4">
          {TOOLS.map((t, i) => (
            <div className="col-12 col-sm-6 col-lg-3" key={i}>
              <article className="tool-card-clear h-100 text-center p-4">
                <div
                  className="tool-icon-clear d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ borderColor: t.color, color: t.color }}
                >
                  <i className={`bi ${t.icon}`}></i>
                </div>
                <h6 className="fw-semibold">{t.name}</h6>
                <p className="small text-muted">{t.desc}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsClear;

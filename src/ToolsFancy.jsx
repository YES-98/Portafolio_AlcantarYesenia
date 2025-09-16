// ToolsClear.jsx
const TOOLS = [
  { name: "Git & GitHub", icon: "bi-git", desc: "Versionado y flujo Git", color: "#ef4444" },
  { name: "MySQL", icon: "bi-database", desc: "Base de datos relacional (SQL)", color: "#4479A1" },
  { name: "Firebase", icon: "bi-cloud-arrow-up", desc: "Auth, DB y hosting", color: "#f59e0b" },
  { name: "Vercel", icon: "bi-rocket-takeoff", desc: "Deploys rápidos", color: "#8b5cf6" },
  { name: "Figma", icon: "bi-palette", desc: "UI/UX y prototipos", color: "#22c55e" },
  { name: "Illustrator", icon: "bi-palette", desc: "Diseño vectorial y UI/UX", color: "#ff9a00" },
  { name: "VS Code", icon: "bi-laptop", desc: "IDE principal para desarrollo", color: "#007ACC" }

];

function ToolsClear() {
  return (
    <section id="herramientas" className="py-5 bg-light">
      <div className="container">
        <h2 className="h3 fw-bold mb-4 text-center text-dark">Herramientas</h2>

        {/* 
          row-cols-1: en XS 1 columna (6 filas)
          row-cols-sm-3: de SM en adelante 3 columnas -> con 6 items = 2 filas
        */}
        <div className="row g-4 row-cols-1 row-cols-sm-3">
          {TOOLS.map((t, i) => (
            <div className="col" key={i}>
              <article className="tool-card-clear h-100 text-center p-4">
                <div
                  className="tool-icon-clear d-flex align-items-center justify-content-center mx-auto mb-3"
                  style={{ borderColor: t.color, color: t.color }}
                  aria-hidden="true"
                >
                  <i className={`bi ${t.icon}`}></i>
                </div>
                <h6 className="fw-semibold">{t.name}</h6>
                <p className="small text-muted mb-0">{t.desc}</p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ToolsClear;

import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import "./skills.css";

const Skills = () => {
  const skillsData = [
    { name: "React", value: 85, color: "#61DBFB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Node.js", value: 70, color: "#3C873A", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "SQL", value: 65, color: "#00758F", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "HTML", value: 65, color: "#e34c26", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", value: 65, color: "#264de4", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "Bootstrap", value: 65, color: "#7952b3", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
     ];

  const personalSkills = [
    {
      name: "Trabajo en equipo",
      desc: "Colaboro eficazmente en grupos multidisciplinarios, aportando ideas y apoyando a mis compañeros.",
      icon: "🤝"
    },
    {
      name: "Comunicación efectiva",
      desc: "Expreso mis ideas de forma clara, tanto en presentaciones como en reportes técnicos.",
      icon: "🗣"
    },
    {
      name: "Resolución de problemas",
      desc: "Analizo situaciones complejas y propongo soluciones prácticas y eficientes.",
      icon: "🎯"
    },
    {
      name: "Adaptabilidad",
      desc: "Me ajusto rápidamente a nuevas herramientas, entornos y metodologías de trabajo.",
      icon: "⚡"
    }
  ];

  // Observer de la sección
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  });

  return (
    <section id="habilidades" ref={ref} className="py-5 bg-light text-dark">
      <div className="container">
        <h2 className="h3 fw-bold mb-4 text-center">Habilidades</h2>

        <div className="row">
          {/* Columna 1: Habilidades técnicas */}
          <div className="col-md-6">
            <h4 className="text-center mb-3">Técnicas</h4>
            <div className="row gy-4">
              {skillsData.map((skill, i) => (
                <SkillCircle key={i} {...skill} start={inView} />
              ))}
            </div>
          </div>

          {/* Columna 2: Habilidades personales */}
          <div className="col-md-6">
            <h4 className="text-center mb-3">Personales</h4>
            <div className="row gy-4">
              {personalSkills.map((skill, i) => (
                <div key={i} className="col-12">
                  <div className="personal-skill-card">
                    <div className="icon">{skill.icon}</div>
                    <div>
                      <h6 className="mb-1">{skill.name}</h6>
                      <p className="mb-0">{skill.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCircle = ({ name, value, color, logo, start }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    if (start) {
      let current = 0;
      const interval = setInterval(() => {
        current += 1;
        if (current > value) {
          clearInterval(interval);
        } else {
          setPercentage(current);
        }
      }, 15);
      return () => clearInterval(interval);
    } else {
      setPercentage(0);
    }
  }, [start, value]);

  return (
    <div className="col-6 text-center">
      <div className="skill-circle position-relative mx-auto">
        <CircularProgressbar
          value={percentage}
          text={""}
          styles={buildStyles({
            pathColor: color,
            trailColor: "#d6d6d6",
          })}
        />
        <img src={logo} alt={name} className="skill-logo" />
        <span className="skill-percent">{percentage}%</span>
      </div>
      <h6 className="mt-2">{name}</h6>
    </div>
  );
};

export default Skills;

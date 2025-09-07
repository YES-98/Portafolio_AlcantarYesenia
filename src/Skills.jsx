import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import './skills.css';

const Skills = () => {
  const skills = [
    { name: "React", value: 85, color: "#61DBFB" },
    { name: "Node.js", value: 70, color: "#3C873A" },
    { name: "Python", value: 35, color: "#FFD43B" },
    { name: "SQL", value: 65, color: "#00758F" },
    { name: "HTML", value: 65, color: "#001a8fff" },
    { name: "CSS", value: 65, color: "#00758F" },
    { name: "Bootstrap", value: 65, color: "#8c00ffff" },
  ];

  // Observer de la sección
  const { ref, inView } = useInView({
    triggerOnce: false, // se activa cada vez que entra en pantalla
    threshold: 0.3, // 30% visible para disparar animación
  });

  return (
    <section id="habilidades" ref={ref} className="py-5 bg-light text-dark">
      <div className="container">
        <h2 className="h3 fw-bold mb-4 text-center">Habilidades</h2>
        <div className="row gy-4">
          {skills.map((skill, i) => (
            <SkillCircle key={i} {...skill} start={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const SkillCircle = ({ name, value, color, start }) => {
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
      }, 15); // velocidad
      return () => clearInterval(interval);
    } else {
      // cuando sales de vista, reinicia a 0
      setPercentage(0);
    }
  }, [start, value]);

  return (
    <div className="col-6 col-md-3 text-center">
      <div style={{ width: 100, height: 100, margin: "0 auto" }}>
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textSize: "18px",
            pathColor: color,
            textColor: "#111",
            trailColor: "#d6d6d6",
          })}
        />
      </div>
      <h6 className="mt-2">{name}</h6>
    </div>
  );
};

export default Skills;

import "./MySkills.css";
import { useEffect } from "react";
import Aos from "aos"
import "aos/dist/aos.css"

export default function MySkills() {
  useEffect(() => {
    Aos.init({duration: 800});
  }, [])

  return (
    <div className="MySkills fade-in">
      <h1 data-aos="fade-in">My Skills</h1>
      <div data-aos="fade-left" className="wrap">
        <div className="eachSkill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          <p>JavaScript</p>
        </div>
        <div className="eachSkill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
          <p>TypeScript</p>
        </div>
        <div className="eachSkill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          <p>CSS</p>
        </div>
        <div className="eachSkill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          <p>HTML</p>
        </div>
        <div className="eachSkill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          <p>Node.js</p>
        </div>
        <div className="eachSkill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          <p>React</p>
        </div>
        <div className="eachSkill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          <p>MongoDB</p>
        </div>
        <div className="eachSkill">
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" />
          <p>PostGresql</p>
        </div>
        <div className="eachSkill">
        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" />
        <p>Python</p>
        </div>
      </div>
    </div>
  );
}

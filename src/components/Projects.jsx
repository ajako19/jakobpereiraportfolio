import "./Projects.css"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function Projects () {
    useEffect(() => {
        Aos.init({duration: 800});
    }, [])
    return (
        <div className="Projects fade-in">
            <div data-aos="fade-in" className="projectWrap">
                <h1>Projects</h1>
                <div className="eachProject">
                <h2>Food Recipe API Database</h2>
                <p>Food recipe searcher made with
                    spoonacular API.
                </p>
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" />
                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </div>
                <a href="https://github.com/ajako19/ReactProject" target="_blank" rel="noreferrer">
                <button className="projectsButton">
                    View Github
                </button>
                </a>
                <div className="eachProject">
                    <h2>React Tic Tac Toe game</h2>
                    <p>React game made with hooks,
                        and uses state.
                    </p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </div>
                <a href="https://github.com/ajako19/tictactoereact" target="_blank" rel="noreferrer">
                <button className="projectsButton">
                    View Github
                </button>
                </a>
                <div className="eachProject">
                    <h2>React Weather App</h2>
                    <p>Weather app made with Open Weather Map
                    </p>
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                </div>
                <a href="https://github.com/ajako19/weatherapiapp/tree/main/src" target="_blank" rel="noreferrer">
                <button className="projectsButton">
                    View Github
                </button>
                </a>
            </div>
        </div>
    )
}
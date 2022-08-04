import "./Introduction.css"
import Smiley from "../img/smiley.png"
import githublogo from "../img/githublogo.svg"
import linkedinlogo from "../img/linkedinlogo.png"

export default function Introduction () {
    return (
        <div className="intro">
            <div className="left">
                <div className="leftcontent">
                    <h2 className="introname">Hi, I'm</h2>
                    <h1 className="name">Jakob Pereira</h1>
                    <h4>Full-Stack Developer</h4>
                    <div className="imgWrap">
                    <a href="https://github.com/ajako19" target="_blank">
                    <img src={githublogo}></img>
                    </a>
                    <a href="https://www.linkedin.com/in/jakobbpereira/" target="_blank">
                    <img src={linkedinlogo}></img>
                    </a>
                    </div>
                    <i className="bouncingArrow" class="fa-solid fa-arrow-down"></i>            
                </div>
                </div>
        </div>
    )
}


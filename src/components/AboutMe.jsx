import "./AboutMe.css"
import jsImage from  "../img/javascript.png"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

export default function AboutMe () {
    useEffect(() => {
        Aos.init({duration: 600});
    }, [])

    return (
    <div className="AboutMe fade-in">
            <h1 data-aos="fade-down">About Me</h1>
            <p data-aos="fade-in">
                I'm a highly motivated developer
                nearing the end of the Grand Circus
                Full-Stack JS Bootcamp where we learned
                many front, and back-end technologies.
                I'm so excited for my future as a programmer,
                and the opportunity to learn everyday as a job!
            </p>
    </div>
    )
}
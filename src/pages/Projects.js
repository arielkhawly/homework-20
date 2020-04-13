import React from "react";
import '../components/assets/css/Projects.css'

function Projects() {
    return (
        <article>
            <div>
              <img className="project" src={require("../components/assets/images/date.png")}></img>
              <img className='project' src={require("../components/assets/images/boxing.png")}></img>
              <img className='project' src={require("../components/assets/images/tracker.png")}></img>
            </div>
            <div>
            <a title='project 1' target='_blank' rel="noopener noreferrer" href="https://arielkhawly.github.io/project-1/"> Last Minute Date Generator </a>
            <a title='project 2' taget='_blank' rel="noopener noreferrer" href=" https://gentle-bayou-98216.herokuapp.com/"> The Boxing Office </a>
            <a title='project 3' tagrte='_blank' rel="noopener noreferrer" href="https://nameless-journey-02981.herokuapp.com/"> Symptom Tracker </a>
            </div>
        </article>
    )
}

export default Projects
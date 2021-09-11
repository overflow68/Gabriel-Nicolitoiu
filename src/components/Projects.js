import React from "react";
import projects from '../data/projects.js';
import Proj from './projItem';


function Projects() {

    return (
<div className="projects-cont">
        {projects.map(item=>{
          return <Proj link={item.link} title={item.nome} photo={item.foto} description={item.description}/>
        })}
</div>
       
    );
  }
  
  export default Projects;
  
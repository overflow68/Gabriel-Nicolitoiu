import React from "react";
import {useToggle} from '../toggleModeContext.js'

function Proj(props) {
    const { returnClass } = useToggle();
    return (
        <div className={returnClass("project","light-border")}>
        <div className="project-pic-cont"><a target="_blank" rel="noopener noreferrer" href={props.link}><img alt="" className={returnClass("project-pic","light-border-pic")} src={props.photo}></img></a>
        <div className="project-desc"><h3>{props.title}</h3><p>{props.description}</p></div>
        </div>
      </div>
    );
  }
  
  export default Proj;
  
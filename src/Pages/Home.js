import React from "react";
import Navbar from "../components/navbar";
import mainpic from "../images/main.png";
import { useToggle } from "../toggleModeContext.js";
import computer from "../images/icp1.png";
import pc from "../images/pc.png";
import git from "../images/git.png";
import npm from "../images/npm.png";
import react from "../images/react1.png";
import js from "../images/js.png";
import html from "../images/html.png";
import css from "../images/css.png";

function Home() {
  const { returnClassExtra, returnClass } = useToggle();
  return (
    <div className="home">
      <Navbar />
      <div className="main-container">
        <div className="img-cont">
          <img className="main-img" alt="" src={mainpic}></img>
        </div>
        <div className="small-item">
          <h2>Bem-vindo,</h2>
          <p className={returnClass("text", "light-text")}>
            O meu nome é Gabriel Nicolitoiu.
          </p>
        </div>
        <div 
          className={returnClassExtra(
            "item-container",
            "item-color1",
            "light-color1"
          )}
        >
          <div id="sobre" className="data-cont">
          <div className="body-img">
            <img className="reg-img" alt="" src={computer} />
          </div>
          <div className="text-format1">
            <div className="sub-text-format">
            <h1>Sobre mim</h1>
            Tenho 22 anos, sou um programador júnior auto-instruído com experiencia em JavaScript / React. Tenho um gosto por web-development
            e decidi por isso mesmo, aprender a construir as minhas próprias aplicações web.
            </div>
          </div>
          </div>
        </div>
        <div 
          className={returnClassExtra(
            "item-container",
            "item-color2",
            "light-color2"
          )}
        >
          <div id="percurso" className="data-cont">
          <div className="body-img">
            <img className="reg-img" alt="" src={pc} />
          </div>
          <div className="text-format1">
            <div className="sub-text-format">
            <h1>Percurso</h1>
            Apesar de sempre ter tido um fascínio por programação, apenas recentemente, em finais de 2020 decidi que queria seguir esta carreira.
            Sem experiencia nenhuma em JavaScript, embarquei nesta aventura de auto-aprendizagem nos tempos livres através de recursos presentes na internet.
            </div>
          </div>
          </div>
        </div>
        <div
          className={returnClassExtra(
            "item-container",
            "item-color3",
            "light-color3"
          )}
        >
          
          <h1 className="skill-title">Skillset</h1>
        <div className="skillset">
          
          <div className="skill-img-cont"><img className="skill-img" alt="" src={git}></img>Git</div>
          <div className="skill-img-cont"><img className="skill-img" alt="" src={js}></img>JavaScript</div>
          <div className="skill-img-cont"><img className="skill-img" alt="" src={react}></img>ReactJS</div>
          <div className="skill-img-cont"><img className="skill-img" alt="" src={npm}></img>Npm</div>
          <div className="skill-img-cont"><img className="skill-img" alt="" src={html}></img>HTML</div>
          <div className="skill-img-cont"><img className="skill-img" alt="" src={css}></img>CSS</div>
          </div></div>
        <div
          className={returnClassExtra(
            "item-container",
            "item-color4",
            "light-color4"
          )}
        ></div>
        <div
          className={returnClassExtra(
            "item-container",
            "item-color1",
            "light-color1"
          )}
        ></div>
        <div id="paris"
          className={returnClassExtra(
            "item-container",
            "item-color2",
            "light-color2"
          )}
        ></div>
      </div>
    </div>
  );
}

export default Home;
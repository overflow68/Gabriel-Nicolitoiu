import React from "react";
import Navbar from "../components/navbar";
import mainpic from "../images/whitebg.jpg";
import { useToggle } from "../toggleModeContext.js";
import computer from "../images/icp1.png";
import pc from "../images/pc.png";
import git from "../images/git.png";
import npm from "../images/npm.png";
import react from "../images/react1.png";
import js from "../images/js.png";
import html from "../images/html.png";
import css from "../images/css.png";
import weather from "../images/weather.png"
import cv from "../images/cv-app.png"
import cardGame from "../images/card-game.png"
import battleship from "../images/battleship.png"
import calculadora from "../images/calculadora.png"
import myGram from "../images/my-gram.png"
import speed from "../images/speed.png"
import shop from "../images/shop.png"

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
          
          <h1  id="skillset" className="skill-title">Skillset</h1>
        <div className="skillset">
          
          <div className="skill-img-cont"><img className="skill-img" alt="" src={git}></img>Git</div>
          <div className="skill-img-cont"><img className="skill-img" alt="" src={js}></img>JavaScript</div>
          <div className="skill-img-cont"><img className="skill-img" alt="" src={react}></img>ReactJS</div>
          <div className="skill-img-cont"><img className="skill-img" alt="" src={npm}></img>Npm</div>
          <div className="skill-img-cont"><img className="skill-img" alt="" src={html}></img>HTML</div>
          <div className="skill-img-cont"><img className="skill-img" alt="" src={css}></img>CSS</div>
          </div></div>
       
        <div className="projects">
        <h1>Projetos</h1>
        <div className="projects-cont">
          <div className={returnClass("project","light-border")}>
            <div className="project-pic-cont"><a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/weather_app"><img alt="" className={returnClass("project-pic","light-border-pic")} src={weather}></img></a>
            <div className="project-desc"><h3>Meteorologia</h3><p>Uma aplicação de Meteorologia que abrange qualquer cidade no mundo</p></div>
            </div>
          </div>
          <div className={returnClass("project","light-border")}>
            <div className="project-pic-cont"><a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/CV-app"><img alt="" className={returnClass("project-pic","light-border-pic")} src={cv}></img></a>
            <div className="project-desc"><h3>CV-maker</h3><p>Aplicação-web que permite criar e exportar o seu currículo.</p></div>
            </div>
          </div>
          <div className={returnClass("project","light-border")}>
            <div className="project-pic-cont"><a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/memory-game"><img alt="" className={returnClass("project-pic","light-border-pic")} src={cardGame}></img></a>
            <div className="project-desc"><h3>Jogo de memória</h3><p>Um jogo de memória baseado na seleção portuguesa de futebol</p></div>
            </div>
          </div>
          <div className={returnClass("project","light-border")}>
            <div className="project-pic-cont"><a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/Battleship"><img alt="" className={returnClass("project-pic","light-border-pic")} src={battleship}></img></a>
            <div className="project-desc"><h3>Batalha naval</h3><p>Um simples jogo single-player de batalha naval.</p></div>
            </div>
          </div>
          <div className={returnClass("project","light-border")}>
            <div className="project-pic-cont"><a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/Calculator"><img alt="" className={returnClass("project-pic","light-border-pic")} src={calculadora}></img></a>
            <div className="project-desc"><h3>Calculadora</h3><p>Calculadora básica que cobre todas as operações.</p></div>
            </div>
          </div>
          <div className={returnClass("project","light-border")}>
            <div className="project-pic-cont"><a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/My-Gram"><img alt="" className={returnClass("project-pic","light-border-pic")} src={myGram}></img></a>
            <div className="project-desc"><h3>Sistema de login</h3><p>Sistema de login com interface baseada no Instagram.</p></div>
            </div>
          </div>
          <div className={returnClass("project","light-border")}>
            <div className="project-pic-cont"><a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/speed-typing"><img alt="" className={returnClass("project-pic","light-border-pic")} src={speed}></img></a>
            <div className="project-desc"><h3>Speed-typing</h3><p>Uma aplicação que permite praticar a rapidez de escrita.</p></div>
            </div>
          </div>
          <div className={returnClass("project","light-border")}>
            <div className="project-pic-cont"><a target="_blank" rel="noopener noreferrer" href="https://overflow68.github.io/shopping-cart"><img alt="" className={returnClass("project-pic","light-border-pic")} src={shop}></img></a>
            <div className="project-desc"><h3>Carrinho de compras</h3><p>Template de um website de venda de artigos de moda.</p></div>
            </div>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
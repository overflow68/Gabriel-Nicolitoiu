import React from "react";
import Navbar from "../components/navbar";
import mainpic from "../images/main.png";
import { useToggle } from "../toggleModeContext.js";
import robot from "../images/robot.png";
import computer from "../images/icp.png";
import group from "../images/group.png";
import doge from "../images/doge.png";
import pc from "../images/pc.png";

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
            Tenho 22 anos, sou um programador júnior com experiencia em JavaScript / React. Tenho um gosto por web-development
            e decidi por isso mesmo, aprender a construir as minhas próprias aplicações.
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
          <div className="data-cont">
          <div className="body-img">
            <img className="reg-img" alt="" src={pc} />
          </div>
          <div className="text-format1">
            <div className="sub-text-format">
            <h1>Sobre mim</h1>
            Tenho 22 anos, sou um programador júnior com experiencia em JavaScript / React. Tenho um gosto por web-development
            e decidi por isso mesmo, aprender a construir as minhas próprias aplicações.
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
        ></div>
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
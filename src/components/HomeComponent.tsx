import React from "react";
import imagenVaquero from "../assets/img/arthur.morgan.png";
import logoRDR2 from "../assets/img/rdr2.logo.png";
import "../assets/css/home-component.css";

function MainContent() {
  return (
    <div className="main-content">
      <img src={imagenVaquero} alt="Vaquero de RDR2" className="main-image" />
      <div className="text-container">
        <img
          src={logoRDR2}
          alt="Red Dead Redemption 2"
          className="main-title"
        />
        <p className="main-subtitle">
          {" "}
          La historia está ambientada en una representación ficticia de los
          Estados Unidos en 1899 y sigue las hazañas de Arthur Morgan, un
          forajido y miembro de la pandilla Van der Linde, que debe lidiar con
          el declive del Salvaje Oeste mientras intenta sobrevivir contra las
          fuerzas gubernamentales, las pandillas rivales y otros adversarios. El
          juego se presenta a través de perspectivas de primera y tercera
          persona, y el jugador puede deambular libremente en su mundo abierto
          interactivo.
        </p>
        <div className="main-links">
          <a href="#">Comprar</a>
          <a href="#">Rockstar Social Club</a>
          <a href="#">Steam</a>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

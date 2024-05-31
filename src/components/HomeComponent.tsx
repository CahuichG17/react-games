import React, { useState, useEffect } from "react";
import axios from "axios";
import imagenVaquero from "../assets/img/arthur.morgan.png";
import logoRockstar from "../assets/img/rockstarlogo.png";
import logoSteam from "../assets/img/steamlogo.png";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import"../assets/css/home-component.css";

interface GameData {
  id: number;
  name: string;
  background_image: string;
  description_raw: string;
}

function MainContent() {
  const [gameData, setGameData] = useState<GameData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const apiKey = "f440cc6f53ef461793a6427f1abc6020";
    const gameSlug = "red-dead-redemption-2";

    axios
      .get(`https://api.rawg.io/api/games/${gameSlug}?key=${apiKey}`)
      .then((response) => {
        setGameData(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("errr:", error);
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="main-content">
      <img src={imagenVaquero} alt="Vaquero de RDR2" className="main-image" />
      <div className="text-container">
        {isLoading ? (
          <p>Cargando...</p>
        ) : gameData ? (
          <>
            <img
              src={gameData.background_image}
              alt={gameData.name}
              className="main-title"
            />

{/* <div className="text-container">
        <img
          src={logoRDR2}
          alt="Red Dead Redemption 2"
          className="main-title"
        /> */}


            <p className="main-subtitle">{gameData.description_raw}</p>
          </>
        ) : (
          <p>Error al cargar los datos del juego</p>
        )}
        <div className="main-links">
          <a href="#">
            <FontAwesomeIcon icon={faShoppingCart} /> Comprar
          </a>
          <a href="#">
            <img src={logoRockstar} alt="Rockstar Social Club" className="logo" />
            Rockstar Social Club
          </a>
          <a href="#">
            <img src={logoSteam} alt="Steam" className="logo" />
            Steam
          </a>
        </div>
      </div>
    </div>
  );
}

export default MainContent;

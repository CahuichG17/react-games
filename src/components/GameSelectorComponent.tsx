import React from 'react';
import "../assets/css/card-component.css";


const games = [
  {
    name: "PlayerUnknown's Battlegrounds",
    edition: "Gala Edition",
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a66d9aa2-f0a2-4e8d-9d73-4ba543ea1a50/dcvmu62-5c2b1cba-fed3-440d-8ce9-5e8787e0f08e.png/v1/fit/w_375,h_549/pubg__render__by_kindratblack_dcvmu62-375w.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ5OCIsInBhdGgiOiJcL2ZcL2E2NmQ5YWEyLWYwYTItNGU4ZC05ZDczLTRiYTU0M2VhMWE1MFwvZGN2bXU2Mi01YzJiMWNiYS1mZWQzLTQ0MGQtOGNlOS01ZTg3ODdlMGYwOGUucG5nIiwid2lkdGgiOiI8PTEwMjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.1KLRq93GvAyQuOA1XKGBkCRsmVpLOiBwl82PfHauRrQ' // Reemplaza con la ruta de tu imagen
  },
  {
    name: "Call of Duty: Modern Warfare II",
    edition: "Defisted Edition",
    image: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/774ba0fd-c421-4cba-9f2b-56b562cc850c/dfehby7-77fd6788-44ff-4591-b2b0-cff3bf4ecae6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc3NGJhMGZkLWM0MjEtNGNiYS05ZjJiLTU2YjU2MmNjODUwY1wvZGZlaGJ5Ny03N2ZkNjc4OC00NGZmLTQ1OTEtYjJiMC1jZmYzYmY0ZWNhZTYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.NPE-vGNx1z6dF6v1k1ErlI6EjCYLGKMJsJl5XuZc6QY' 
  },
  {
    name: "Fall Guys",
    edition: "Ultimate Knockout Edition",
    image: 'https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/ncom/software/switch/70010000042975/desc/11bb32fb73f3896aa19b5abc97a16875f9af10f4205cf373e39a0528970c5fe5' 
  }
];

function GameCards() {
  return (
    <div className="game-cards-container">
      {games.map(game => (
        <div className="game-card" key={game.name}>
          <div className="game-info">
            <h3 className="game-title">{game.name}</h3>
            <p className="game-edition">{game.edition}</p>
          </div>
          <img src={game.image} alt={game.name} className="game-image" />
        </div>
      ))}
    </div>
  );
}

export default GameCards;

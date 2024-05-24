import React from 'react';

type Videojuego = {
  titulo: string;
  imagen: string;
  estrellas: number;
  descripcion: string;
};

type CartaProps = {
  videojuego: Videojuego;
};

const Carta: React.FC<CartaProps> = ({ videojuego }) => {
  return (
    <div>
      <img src={videojuego.imagen} alt={videojuego.titulo} />
      <h2>{videojuego.titulo}</h2>
      <p>{'⭐'.repeat(videojuego.estrellas)}</p>
      <p>{videojuego.descripcion}</p>
      <button>Ver detalles</button>
    </div>
  );
};

export default Carta;
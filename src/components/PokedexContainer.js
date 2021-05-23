import React from "react";

export default function PokedexContainer({ children }) {
  return (
    <div
      className={
        "flex flex-col bg-pokedexList bg-cover bg-center h-full  py-48 justify-center items-center"
      }
    >
      {children}
    </div>
  );
}

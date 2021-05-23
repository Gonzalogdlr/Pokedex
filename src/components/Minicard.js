import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../helpers/fetch";
import { capitalize } from "../helpers/helpers";

export default function Minicard({ name, image }) {
  const { data, isLoading } = useQuery(image, fetcher);
  if (isLoading) {
    return (
      <div className={" flex flex-col items-center w-20 "}>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png" alt="Pokemon" />
        <div
          className={
            "flex justify-center border border-black rounded-xl w-24 px-2 bg-red-800 text-yellow-500 hover:bg-yellow-500 hover:text-red-800"
          }
        >
          <h1>Who?</h1>
        </div>
      </div>
    );
  }
  return (
    <div className={"flex flex-col items-center w-20 "}>
      <img className={"animate-bounce-short"} src={data.sprites.front_default} alt="Pokemon" />
      <div
        className={
          "flex justify-center border border-black rounded-xl w-24 px-2 bg-red-800 text-yellow-500 hover:bg-yellow-500 hover:text-red-800"
        }
      >
        <h1 className="font-serif font-bold">{capitalize(name.split("-")[0])}</h1>
      </div>
    </div>
  );
}

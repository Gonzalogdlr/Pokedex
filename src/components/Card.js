import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import {fetcher} from "../helpers/fetch"
import {capitalize, shuffleArray} from "../helpers/helpers"

export default function Card() {
  const [id, setId] = useState(1);
  const { data, isLoading } = useQuery(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    fetcher
  );
  function nextPokemon() {
    let nextId = id + 1;
    setId(nextId);
  }
  function prevPokemon() {
    let nextId = id - 1;
    setId(nextId);
  }

  if (isLoading) {
    return (
      <div
        className={
          "bg-back bg-cover bg-center w-80 pt-2 px-4 h-72 border-2 border-black rounded-xl"
        }
      ></div>
    );
  }
  return (
    <div
      className={
        "bg-back bg-cover bg-center w-80 pt-2 px-4 h-72 border-2 border-black rounded-xl"
      }
    >
      <div className={"flex flex-row justify-between"}>
        {id == 1 ? (
          <div>
            <FontAwesomeIcon icon={faLongArrowAltLeft} color={"transparent"} />
          </div>
        ) : (
          <button onClick={prevPokemon}>
            <FontAwesomeIcon icon={faLongArrowAltLeft} color={"gold"}/>
          </button>
        )}
        <div>
          <h3 className={"text-white font-serif"}>{capitalize(data.name)}</h3>
        </div>
        {id == 151 ? (
          <div>
            <FontAwesomeIcon icon={faLongArrowAltRight} color={"transparent"} />
          </div>
        ) : (
          <button onClick={nextPokemon}>
            <FontAwesomeIcon icon={faLongArrowAltRight} color={"gold"}/>
          </button>
        )}
      </div>
      <div
        className={
          "flex justify-center border-black border-2 bg-cover h-24 bg-forest rounded-xl"
        }
      >
        <img src={data.sprites.front_default} />
      </div>
      <div className={"flex justify-between"}>
        <div className={"flex gap-2 w-10"}>
          {data.types.map((e) => {
            return <h3 className={"text-white font-serif"}>{capitalize(e.type.name)}</h3>;
          })}
        </div>
        <h3 className={"text-white font-serif"}>#{id}</h3>
      </div>
      {shuffleArray(data.moves)
        .slice(0, 4)
        .map((e) => {
          return <h3 className={"text-white font-serif"}>- {capitalize(e.move.name)}</h3>;
        })}
    </div>
  );
}

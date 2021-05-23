import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../helpers/fetch";
import { capitalize, types } from "../helpers/helpers";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import PokedexContainer from "./PokedexContainer";

function formatNumber(number) {
  return number < 10 ? "00" + number : number < 100 ? "0" + number : number;
}
export default function Card() {
  const { name } = useParams();
  const { data, isLoading } = useQuery(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );

  if (isLoading) {
    return (
      <div className={"bg-forest bg-cover h-full  pt-2 px-4 rounded-xl"}></div>
    );
  }
  return (
    <PokedexContainer>
      <Link className={"self-start"} to={`/`}>
        <button
          className={
            "border ml-5  bg-yellow-500 text-red-800 hover:bg-white hover:text-black px-8 rounded-2xl rounded-l-none mb-4 font-bold font-serif"
          }
        >
          Return
        </button>
      </Link>
      <div className={"flex flex-row items-center gap-5"}>
        <div className={"flex gap-4 py-6"}>
          <h3 className={"text-white font-serif text-3xl font-bold"}>
            {capitalize(data.name)}
          </h3>

          <h3 className={"text-white font-serif text-3xl font-bold"}>
            #{data.id}
          </h3>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-2">
        <img
          src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${formatNumber(
            data.id
          )}.png`}
          alt="Pokemon :D"
        />
        <div className={"flex gap-2 justify-center"}>
          {data.types.map((e) => {
            return (
              <div
                className={`${types(
                  e.type.name
                )} flex items-center px-4 rounded-xl border-black border`}
              >
                <h3 className={"text-white font-serif font-bold"}>
                  {capitalize(e.type.name)}
                </h3>
              </div>
            );
          })}
        </div>
      </div>
      {/* <p className={"text-xl text-white font-serif"}>Movements:</p>
        {data.moves.slice(0, 10).map((e) => {
          return (
            <h3 className={"text-white font-serif px-8"}>
              - {capitalize(e.move.name)}
            </h3>
          );
        })} */}
    </PokedexContainer>
  );
}

import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
import { fetcher } from "../helpers/fetch";
import { capitalize, types } from "../helpers/helpers";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function formatNumber(number) {
  return number < 10 ? "00" + number : number < 100 ? "0" + number : number;
}
export default function Card() {
  const { name } = useParams();
  const [urlId, setUrlID] = useState("");
  const { data, isLoading } = useQuery(
    `https://pokeapi.co/api/v2/pokemon/${name}`,
    fetcher
  );
  useEffect(() => {
    if (!isLoading) {
      setUrlID(formatNumber(data.id));
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className={"bg-forest bg-cover h-full  pt-2 px-4 rounded-xl"}></div>
    );
  }
  return (
    <div className={"bg-pokedexList bg-cover bg-center h-full  pt-2 px-4 rounded-xl"}>
      <Link to={`/`}>
        <FontAwesomeIcon icon={faLongArrowAltLeft} color={"gold"} />
      </Link>
      <div className={"bg-forest  bg-cover"}>
        <div className={" flex justify-center items-center gap-3 mt-56 "}>
          <h3 className={"text-white font-serif text-3xl font-bold"}>
            {capitalize(data.name)}
          </h3>

          <h3 className={"text-white font-serif text-3xl font-bold"}>
            #{data.id}
          </h3>
        </div>
        <div className="flex flex-col items-center gap-2">
          <img
            className={"h-44 w-44"}
            src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${urlId}.png`}
            alt="Pokemon :D"
          />
          <div className={"flex gap-2"}>
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
      </div>
      {/* <p className={"text-xl text-white font-serif"}>Movements:</p>
      {data.moves.slice(0, 10).map((e) => {
        return (
          <h3 className={"text-white font-serif px-8"}>
            - {capitalize(e.move.name)}
          </h3>
        );
      })} */}
    </div>
  );
}

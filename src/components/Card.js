import React from "react";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";
import { fetcher } from "../helpers/fetch";
import { capitalize, types } from "../helpers/helpers";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
    <div className={"bg-forest bg-cover h-full  pt-2 px-4 rounded-xl"}>
      <div className={"flex flex-row items-center gap-5"}>
        <Link to={`/`}>
          <FontAwesomeIcon icon={faLongArrowAltLeft} color={"gold"} />
        </Link>
        <div className={"flex gap-4 py-6"}>
          <h3 className={"text-white font-serif text-3xl font-bold"}>
            {capitalize(data.name)}
          </h3>

          <h3 className={"text-white font-serif text-3xl font-bold"}>
            #{data.id}
          </h3>
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
      <div className="flex justify-center gap-2">
        <img
          className="border border-white rounded-xl"
          src={data.sprites.front_default}
            alt="Pokemon :D"
        />
        <img
          className="border border-white rounded-xl"
          src={data.sprites.back_default}
            alt="Pokemon :D"
        />
        <img
          className="border border-white rounded-xl"
          src={data.sprites.front_shiny}
            alt="Pokemon :D"
        />
        <img
          className="border border-white rounded-xl"
          src={data.sprites.back_shiny}
            alt="Pokemon :D"
        />
      </div>
      <p className={"text-xl text-white font-serif"}>Movements:</p>
      {data.moves
        .slice(0, 10)
        .map((e) => {
          return (
            <h3 className={"text-white font-serif px-8"}>
              - {capitalize(e.move.name)}
            </h3>
          );
        })}
    </div>
  );
}

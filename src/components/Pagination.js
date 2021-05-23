import React, { useState } from "react";
import { useQuery } from "react-query";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import Minicard from "./Minicard";
import { fetcher } from "../helpers/fetch";
import { Link } from "react-router-dom";

export default function Pagination() {
  const [number, setNumber] = useState("")
  const [numberStart, setNumberStart] = useState("")
  const { data, isLoading } = useQuery(
    `https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=${numberStart}`,
    fetcher
  );
  const [enabled, setEnabled] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);
  const pokemonPerPage = 9;
  const pagesVisited = pageNumber * pokemonPerPage;

  const pageCount = Math.ceil(number / pokemonPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  if (isLoading) {
    return (
      <div
        className={
          "bg-back bg-cover bg-center w-80 pt-2 px-4 h-72 border-2 border-black rounded-xl"
        }
      ></div>
    );
  }
  function toggle() {
    setEnabled(!enabled);
  }
  function Kanto() {
    setNumber("151");
    setNumberStart("0");
    toggle();
  }
  function Jhoto() {
    setNumber("100");
    setNumberStart("151");
    toggle();
  }
  function Hoenn() {
    setNumber("135");
    setNumberStart("251");
    toggle();
  }
  function Sinnoh() {
    setNumber("107");
    setNumberStart("386");
    toggle();
  }
  function Unova() {
    setNumber("156");
    setNumberStart("493");
    toggle();
  }
  function Kalos() {
    setNumber("72");
    setNumberStart("649");
    toggle();
  }
  function Alolah() {
    setNumber("88");
    setNumberStart("721");
    toggle();
  }
  function Galar() {
    setNumber("89");
    setNumberStart("809");
    toggle();
  }
  return (
    <div
      className={
        "flex flex-col bg-pokedexList bg-cover bg-center h-full justify-center items-center "
      }
    >
      {enabled == false ? (
        <div className="flex flex-wrap w-full gap-3 px-6 justify-center">
          <button onClick={Kanto} className="border  bg-red-800 text-yellow-500 hover:bg-yellow-500 hover:text-red-800 p-5 font-bold rounded-xl">
            Kanto
          </button>
          <button onClick={Jhoto} className="border  bg-red-800 text-yellow-500 hover:bg-yellow-500 hover:text-red-800 p-5 font-bold rounded-xl">
            Jhoto
          </button>
          <button onClick={Hoenn} className="border  bg-red-800 text-yellow-500 hover:bg-yellow-500 hover:text-red-800 p-5 font-bold rounded-xl">
            Hoenn
          </button>
          <button onClick={Sinnoh} className="border  bg-red-800 text-yellow-500 hover:bg-yellow-500 hover:text-red-800 p-5 font-bold rounded-xl">
            Sinoh
          </button>
          <button onClick={Unova}
            className="border  bg-red-800 text-yellow-500 hover:bg-yellow-500 hover:text-red-800 p-5 font-bold rounded-xl"
          >
            Teselia
          </button>
          <button onClick={Kalos} className="border  bg-red-800 text-yellow-500 hover:bg-yellow-500 hover:text-red-800 font-bold p-5 rounded-xl">
            Kalos
          </button>
          <button onClick={Alolah} className="border  bg-red-800 text-yellow-500 hover:bg-yellow-500 hover:text-red-800 font-bold p-5 rounded-xl">
            Alolah
          </button>
          <button onClick={Galar} className="border  bg-red-800 text-yellow-500 hover:bg-yellow-500 hover:text-red-800 font-bold p-5 rounded-xl">
            Galar
          </button>
        </div>
      ) : (
        <>
          <button className={"border ml-5 self-start bg-yellow-500 text-red-800 hover:bg-white hover:text-black px-8 rounded-2xl rounded-l-none mb-4 font-bold font-serif"} onClick={toggle}>Return</button>
          <div className={"grid grid-flow-row grid-cols-3 grid-rows-3 gap-8 "}>
            {data.results
              .slice(pagesVisited, pagesVisited + pokemonPerPage)
              .map((pokemon) => {
                return (
                  <Link to={`/pokemon/${pokemon.name}`}>
                    <Minicard name={pokemon.name} image={pokemon.url} />
                  </Link>
                );
              })}
          </div>
          <ReactPaginate
            previousLabel={
              <FontAwesomeIcon
                className={"text-yellow-400 text-2xl hover:text-red-500"}
                icon={faCaretLeft}
              />
            }
            nextLabel={
              <FontAwesomeIcon
                className={"text-yellow-400 text-2xl hover:text-red-500"}
                icon={faCaretRight}
              />
            }
            pageCount={pageCount}
            marginPagesDisplayed={1}
            onPageChange={changePage}
            containerClassName={
              "flex w-full px-8 py-4 justify-between font-bold"
            }
            activeClassName={"text-red-500 font-bold"}
          />
        </>
      )}
    </div>
  );
}

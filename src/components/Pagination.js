import React, { useState } from "react";
import { useQuery } from "react-query";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons";
import ReactPaginate from "react-paginate";
import Minicard from "./Minicard";
import { fetcher } from "../helpers/fetch";
import { Link } from "react-router-dom";

export default function Pagination() {
  const { data, isLoading } = useQuery(
    `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`,
    fetcher
  );
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 9;
  const pagesVisited = pageNumber * userPerPage;

  const pageCount = Math.ceil(151 / userPerPage);
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
  return (
    <div
      className={
        "flex flex-col bg-pokedexList bg-cover bg-center h-full justify-center items-center "
      }
    >
      <div className={"grid grid-flow-row grid-cols-3 grid-rows-3 gap-8 "}>
        {data.results
          .slice(pagesVisited, pagesVisited + userPerPage)
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
            className={" text-yellow-400 hover:text-red-500"}
            icon={faLongArrowAltLeft}
          />
        }
        nextLabel={
          <FontAwesomeIcon
            className={" text-yellow-400 hover:text-red-500"}
            icon={faLongArrowAltRight}
          />
        }
        pageCount={pageCount}
        marginPagesDisplayed={1}
        onPageChange={changePage}
        containerClassName={"flex w-full px-8 py-4 justify-between"}
      />
    </div>
  );
}

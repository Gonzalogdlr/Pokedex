import React, { useState } from "react";
import { useQuery } from "react-query";

import ReactPaginate from "react-paginate";
import Minicard from "./Minicard";
import { fetcher } from "../helpers/fetch";

export default function Pagination() {
  const { data, isLoading } = useQuery(
    `https://pokeapi.co/api/v2/pokemon?limit=151&offset=0`,
    fetcher
  );
  const [pageNumber, setPageNumber] = useState(0);
  const userPerPage = 18;
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
    <div className={"flex flex-col w-96"}>
      <div className={"grid grid-flow-row grid-cols-3 grid-rows-3 gap-2"}>
        {data.results
          .slice(pagesVisited, pagesVisited + userPerPage)
          .map((pokemon) => {
            return <Minicard name={pokemon.name} image={pokemon.url} />;
          })}
      </div>
      <ReactPaginate
        previousLabel={"Anterior"}
        nextLabel={"Siguiente Gil"}
        pageCount={pageCount}
        onPageChange={changePage}
      />
    </div>
  );
}

import React from "react";
import { useQuery } from "react-query";
import { fetcher } from "../helpers/fetch";
import { capitalize } from "../helpers/helpers";
export default function Minicard({ name, image }) {
  const { data, isLoading } = useQuery(image, fetcher);
  if (isLoading) {
    return <div>Golo</div>;
  }
  return (
    <div className={"flex flex-col items-center w-20 "}>
      <img src={data.sprites.front_default} alt="Pokemon"/>
      <div className={"border border-black rounded-xl px-2"}>
        <h1>{capitalize(name)}</h1>
      </div>
    </div>
  );
}

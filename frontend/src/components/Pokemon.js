import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(
        `http://localhost:3030/pokemon/random`
      );
      setPokemon(data);
      console.log(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="">
        {pokemon.name}

        <img src={`${pokemon.sprites.other.showdown.front_default}`}></img>
      </div>
    );
  }
};

export default Pokemon;

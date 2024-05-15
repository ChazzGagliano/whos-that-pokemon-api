import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const Pokedex = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3030/pokedex/index`);
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
      <div>
        <h1>Pokedex</h1>
        {pokemon.results.map((p) => {
          return <div>{p.name}</div>;
        })}
      </div>
    );
  }
};

export default Pokedex;

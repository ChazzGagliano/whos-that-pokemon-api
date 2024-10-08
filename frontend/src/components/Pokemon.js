import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [currentShiny, setCurrentShiny] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3030/pokemon/${id}`);
      setPokemon(data);
      setCurrentShiny(data.sprites.other.showdown.front_default);
      console.log(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleMouseEnter = () => {
    setCurrentShiny(pokemon.sprites.other.showdown.front_shiny); // Switch to back sprite
  };

  const handleMouseLeave = () => {
    setCurrentShiny(pokemon.sprites.other.showdown.front_default); // Switch back to front sprite
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        <div className="topleft">
          <h1>{pokemon.name}</h1>
        </div>

        <div className="topright">
          <h6>{pokemon.stats[0].stat.name}</h6>{" "}
          <h4>{pokemon.stats[0].base_stat}</h4>
        </div>
        <div>
          <img
            className="easy-gif"
            src={currentShiny}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          ></img>
        </div>
        <div>
          {pokemon.height} ft {pokemon.weight} lbs
        </div>
        <div>
          <div>{pokemon.moves[0].move.name}</div>
          <div>{pokemon.moves[1].move.name}</div>
        </div>
        <div>Number: {pokemon.order}</div>
        <div className="bottomleft">
          {pokemon.types.map((p) => {
            return <div className="">{p.type.name}</div>;
          })}
        </div>
      </div>
    );
  }
};

export default Pokemon;

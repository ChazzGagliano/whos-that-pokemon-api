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

    useEffect(() => {
        async function fetchData() {
          const { data } = await axios.get(`http://localhost:3030/pokemon/${id}`);
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
                <div>
                <img className="easy-gif"
                src={`${pokemon.sprites.other.showdown.front_default}`}
                ></img> 
                </div>
                <div>
                <h1>{pokemon.name}</h1>
                </div>
                <div>
                    <h5>Stats</h5>
                </div>
                <div>
                    {pokemon.stats.map((s) => {
                        return (
                            <div>
                         {s.stat.name}: {s.base_stat}
                            </div>
                        )
                    })}
                </div>
                <h5>Type:</h5>
                {pokemon.types.map((p) => {
                    return (
                        <div>
                            {p.type.name}
                        </div>
                    )
                })}
                <div>
                    <h5>Moves:</h5>
                    {pokemon.moves.map((m) => {
                        return (
                            <div>
                                {m.move.name}
                            </div>
                        )
                    })}
                </div>

            </div>
        )
    }
}

export default Pokemon;
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
                  <div className="topleft">
                    <h1>{pokemon.name}</h1>
                </div>

                <div className="topright">
                    <h6>{pokemon.stats[0].stat.name}</h6> <h4>{pokemon.stats[0].base_stat}</h4>
                </div>
                <div>
                <img className="easy-gif"
                src={`${pokemon.sprites.other.showdown.front_default}`}
                ></img> 
                </div>
                <div>
                    <h8>{pokemon.weight} lbs</h8>
                </div>
                <div>
                   
                <div>
                 {pokemon.moves[0].move.name}
                </div>
                <div>
                {pokemon.moves[1].move.name}
                </div>
                </div>
                <div className="bottomleft">
                {pokemon.types.map((p) => {
                    return (
                        <div className="">
                            {p.type.name}
                        </div>
                    )
                })}
                <div>
                </div>
                   
                </div>

            </div>
        )
    }
}

export default Pokemon;
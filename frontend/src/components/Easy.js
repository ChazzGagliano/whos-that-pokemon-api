import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const Easy = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserinput] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3030/easy/random`);
      setPokemon(data);
      console.log(data);
      setLoading(false);
    }
    fetchData();
  }, []);

  const handleChange = (e) => {
    setUserinput(e.target.value);
  };

  const handleGuess = (e) => {
    e.preventDefault();
    console.log(userInput);
    console.log(pokemon.name);
    if (userInput === pokemon.name) {
      window.location.href = "/easy";
    }
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="">
        <img
          className="easy-gif"
          src={`${pokemon.sprites.other.showdown.front_default}`}
        ></img>
        <div className="">
          <div>
            <div className="">
              <h4>Hint:</h4>
            </div>
            {pokemon.types.map((p) => {
              return <div key={p.id}>{p.type.name}</div>;
            })}
          </div>
        </div>
        {/* 
        <img
        className="img"
        src={pokemon.sprites.front_default}
        >
    </img> */}

        <form onSubmit={handleGuess}>
          <input className="search-bar" type="search" onChange={handleChange} />

          <button className="pokeball" type="submit">
            {" "}
            <img
              className="button"
              src="https://i.pinimg.com/originals/2b/46/73/2b4673e318ab94da17bbf9eaad5b80d6.png"
            />
          </button>
          <div></div>
        </form>
        <button onClick={() => window.location.reload()}> skip</button>
      </div>
    );
  }
};

export default Easy;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import { useParams } from "react-router-dom";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserinput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3030/pokemon/random`);
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
      window.location.href = "/pokemon";
    }
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="">
        <img
          className="img"
          src={`${pokemon.sprites.other.showdown.front_default}`}
        ></img>

        <form onSubmit={handleGuess}>
          <input type="search" onChange={handleChange} />

          <button type="submit">Guess</button>
        </form>
      </div>
    );
  }
};

export default Pokemon;

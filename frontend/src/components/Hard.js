import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";

const Hard = () => {
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [userInput, setUserinput] = useState("");

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`http://localhost:3030/hard/random`);
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
      window.location.href = "/hard";
    }
  };

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="">
        <h1>Kanto(Hard)</h1>
        <img
          className="hard-gif"
          src={`${pokemon.sprites.other.showdown.front_default}`}
        ></img>
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
        <button className="skip" onClick={() => window.location.reload()}>
          <img
            className="button"
            src="https://cdn-icons-png.flaticon.com/512/6398/6398909.png"
            alt="Reload"
          />
        </button>
      </div>
    );
  }
};

export default Hard;

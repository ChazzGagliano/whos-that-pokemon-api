import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
  const [pokemon, setPokemon] = useState("");
  const [term, setTerm] = useState([]);

  const submitPokemon = async (e) => {
    e.preventDefault();

    if (pokemon === "") {
      return;
    }

    const { data } = await axios.get(
      `http://localhost:3030/pokemon/${pokemon}`
    );
    setTerm(data);
    console.log(data);
  };

  return (
    <div>
      <h1>Explore!</h1>
      <input
        className="search-bar"
        type="text"
        onChange={(e) => setPokemon(e.target.value)}
        value={pokemon}
      />
      <button className="pokeball" onClick={submitPokemon}>
      <img
              className="button"
              src="https://i.pinimg.com/originals/2b/46/73/2b4673e318ab94da17bbf9eaad5b80d6.png"
            />
      </button>
      {term && (
        <div>
          <div>
            <Link to={`/pokemon/${term.name}`} className="">
              <div>
              <img className="easy-gif"
                src={`${term.sprites.other.showdown.front_default}`}
                ></img> 
              </div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

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
      <button className="" onClick={submitPokemon}>
        search
      </button>
      {term && (
        <div>
          <div>
            <Link to={`/pokemon/${term.name}`} className="">
              <div>{term.name}</div>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Search;

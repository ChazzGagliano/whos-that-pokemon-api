import axios from "axios";
import React, { useState } from "react";

const Search = () => {
    const [pokemon, setPokemon] = useState("")
    const [term, setTerm] = useState([])



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
            
        </div>
    )
}
    
export default Search;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Loading from "./Loading";


const Starters = () => {
    const [starter, setStarters] = useState(undefined);
    const [loading, setLoading] = useState(true);
    
useEffect(() => {
    async function fetchData() {
        const data = await axios.get(`http://localhost:3030/pokemon/starters`)
        setStarters(data)
        setLoading(false)
    }
    fetchData();
}, [])

if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        
      </div>
    );
  }
}

export default Starters;
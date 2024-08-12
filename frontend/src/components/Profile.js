import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import axios from "axios";

const Profile = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            const data = await axios.get(`http://localhost:3030/user/profile`, {
                withCredentials: true,
            })
            setUser(data);
            console.log(data)
            setLoading(false)
        }
        if (user === null) {
            fetchData()
        }
    }, [user])

    
}

export default Profile;
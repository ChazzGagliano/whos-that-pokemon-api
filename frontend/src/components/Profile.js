import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import { Link } from "react-router-dom";

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

    if (loading) {
        return <Loading /> 
    } else {
        return (
            <div>
            <div>
              <Link className="" to={`/signup`}>
                <h1>New? Sign up!</h1>
              </Link>
            </div>
            <div>
              <Link className="" to={`/login`}>
                <h1>Already a Member? Login!</h1>
              </Link>
            </div>
          </div>
        )
    } 
}

export default Profile;
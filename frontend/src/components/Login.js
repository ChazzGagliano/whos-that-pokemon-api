import React, { useState} from "react"
import axios from "axios"
import Link from "react-router-dom"


const Login = () => {
const [userName, setuserName] = useState("")
const [passWord, setpassWord] = useState("")

const handleLogin = async (e) => {
    e.preventDefault();
    const response = await axios.post("http://localhost:3030/user/login", {
        userName: userName,
        passWord, passWord
    }, {withCredentials: true})

    console.log(response)
}
}

export default Login
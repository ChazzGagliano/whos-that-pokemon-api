import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import axios from "axios";
import { Link } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const data = await axios.get(`http://localhost:3030/user/profile`, {
        withCredentials: true,
      });
      setUser(data);
      console.log(data);
      setLoading(false);
    }
    if (user === null) {
      fetchData();
    }
  }, [user]);

  const handleLogOut = async (event) => {
    event.preventDefault();
    const session = await axios.get(`http://localhost:3030/user/logout`, {
      withCredentials: true,
    });
    console.log(session);
    window.location.href = "/profile";
  };

  if (loading) {
    return <Loading />;
  } else {
    if (user.data.error) {
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
      );
    } else {
      return (
        <div>
          <h1>{user.data.user.username}</h1>
          <div>
            <button className="logout" onClick={handleLogOut} type="button">
              <img
                className="logout-button"
                src="https://cdn1.iconfinder.com/data/icons/heroicons-ui/24/logout-512.png"
              />
            </button>
          </div>
        </div>
      );
    }
  }
};

export default Profile;

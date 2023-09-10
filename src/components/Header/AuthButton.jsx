import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = localStorage.getItem("user");
    if (token) {
      setIsLoggedIn(true);
    }
    if (data) {
        setUserData(JSON.parse(data));
      }
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      {isLoggedIn ? (
        <button className="btn btn-primary" onClick={handleLogout}>
          <img src={userData.photo} className="h-5 w-5 flex-none" />
          Logout
        </button>
      ) : (
        <Link to="/sign-in" className="btn btn-prima">
          <UserIcon className="h-5 w-5 flex-none" />
          Login
        </Link>
      )}
    </div>
  );
}

export default AuthButton;

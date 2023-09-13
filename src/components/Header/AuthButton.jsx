import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import userActions from "../../store/actions/userActions";

function AuthButton() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const dataStore = useSelector((store) => store.userReducer.user);
  useEffect(() => {
    const token = localStorage.getItem("token");
    const data = localStorage.getItem("user");
    if (token) {
      setIsLoggedIn(true);
    }
    if (data) {
      setUserData(JSON.parse(data));
    }
    console.log(isLoggedIn, dataStore);
  }, [isLoggedIn]);

  const handleLogout = async () => {
    dispatch(userActions.sign_out());
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    navigate("/sign-in");
  };

  return (
    <div>
      {isLoggedIn ? (
        <button className="btn btn-primary" onClick={handleLogout}>
          <img
            src={userData.photo}
            className="h-5 w-5 flex-none"
            alt="User Avatar"
          />
          Logout
        </button>
      ) : (
        <Link to="/sign-in" className="btn btn-primary">
          <UserIcon className="h-5 w-5 flex-none" />
          Login
        </Link>
      )}
    </div>
  );
}

export default AuthButton;

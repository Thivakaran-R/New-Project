import React, { useEffect, useState } from "react";
import { UserDetailsApi } from "../services/Api";
import NavBar from "../compoenets/NavBar";
import logout from "../services/Auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ name: "", email: "", localid: "" });
  useEffect(() => {
    UserDetailsApi().then((response) => {
      setUser({
        name: response.data.users[0].displayName,
        email: response.data.users[0].displayName,
        localid: response.data.users[0].displayName,
      });
    });
  }, []);
  const logoutUser = () => {
    logout();
    navigate("/login");
  };
  return (
    <div>
      <NavBar logoutUser={logoutUser} />
      <main role="main" className="container mt-5">
        <div className="container">
          <div className="text-center mt-5">
            <h3>Profile page</h3>
            {user.name && user.email && user.localid ? (
              <div>
                <p className="text-bold ">Hi {user.name}</p>
              </div>
            ) : (
              <p>Loading...</p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

import axios from "axios";
import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./profile.css";

const Profile = ({ setSignUp }) => {
  const [user, setUser] = useState({});
  const [changes, setChanges] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    const userInfoJson = localStorage.getItem("userInfo");
    const userInfo = JSON.parse(userInfoJson);
    setUser(userInfo);
  }, []);

  const handleSave = (e) => {
    try {
      const api = "http://localhost:8080/api/users/me";
      const token = localStorage.getItem("token");
      axios
        .put(api, changes, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((something) => {
          alert("Saved");
        })
        .catch((error) => {
          console.log(Error);
        });
    } catch {
      console.log("error");
    }
  };

  const handleDelete = () => {
    try {
      const api = "http://localhost:8080/api/users/me";
      const token = localStorage.getItem("token");
      axios
        .delete(api, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then(() => {
          setSignUp(false);
          alert("Account deleted successfully");
          navigate("/");
        })
        .catch((error) => {
          console.log(Error);
        });
    } catch {
      console.log("error");
    }
  };

  return (
    <div className="profilediv">
      <div className="profileContainer">
        <div className="settings">Profile Settings</div>
        <div className="yourProfile">
          <div className="key">
            <div>First name: </div>
            <div>Last name: </div>
            <div>Email: </div>
            <div>Role: </div>
            <div>Experience: </div>
            <div>City: </div>
            {/* <div>Categories: </div> */}
          </div>
          <div className="value">
            <input
              defaultValue={user.firstName}
              onChange={(e) =>
                setChanges({ ...changes, firstName: e.target.value })
              }
            />
            <input
              defaultValue={user.lastName}
              onChange={(e) =>
                setChanges({ ...changes, lastName: e.target.value })
              }
            />
            <input
              defaultValue={user.email}
              onChange={(e) =>
                setChanges({ ...changes, email: e.target.value })
              }
            />
            <input
              defaultValue={user.role}
              onChange={(e) => setChanges({ ...changes, role: e.target.value })}
            />
            <input
              defaultValue={user.yearsOfExperience}
              onChange={(e) =>
                setChanges({ ...changes, yearsOfExperience: e.target.value })
              }
            />
            <input
              defaultValue={user.city}
              onChange={(e) => setChanges({ ...changes, city: e.target.value })}
            />
            {/* <input defaultValue={user.category} /> */}
          </div>
        </div>
        <div className="profileButtons">
          <button className="saveBtn" onClick={handleSave}>
            Save
          </button>
          <button className="deleteBtn" onClick={handleDelete}>
            Delete account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;

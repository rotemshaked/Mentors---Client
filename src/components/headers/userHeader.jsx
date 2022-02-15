import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./headerComponent.css";

const UserHeader = ({ setSignUp, signUp }) => {
  const [clickeOnEdit, setClickeOnEdit] = useState(false);
  const navigate = useNavigate();

  const handleProfileClick = () => {
    setClickeOnEdit(!clickeOnEdit);
  };

  const handleLogOutClick = () => {
    localStorage.removeItem("userInfo");
    localStorage.removeItem("token");
    setSignUp(false);
    navigate("/");
  };

  return (
    <div className="userHeader">
      <Link className="home" to="/">
        Home Page
      </Link>
      <div className="profileAndLogOutDiv">
        <div className="logOut" onClick={handleLogOutClick}>
          Log out
        </div>
        <div className="profile" onClick={handleProfileClick}>
          Profile
          <div>
            {clickeOnEdit && (
              <Link className="edit" to="/profile">
                edit profile
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHeader;

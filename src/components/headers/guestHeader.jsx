import { Link } from "react-router-dom";
import "./headerComponent.css";

const GuestHeader = ({ setSignUp, signUp }) => {
  return (
    <div className="guestHeader">
      <Link className="home" to="/">
        Home Page
      </Link>
      <div className="side-link">
        <Link className="login" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default GuestHeader;

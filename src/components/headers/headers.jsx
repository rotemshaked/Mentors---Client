import UserHeader from "./userHeader";
import GuestHeader from "./guestHeader";
import "./headerComponent.css";

const Header = ({ setSignUp, signUp }) => {
  return signUp ? (
    <UserHeader setSignUp={setSignUp} signUp={signUp} />
  ) : (
    <GuestHeader setSignUp={setSignUp} signUp={signUp} />
  );
};

export default Header;

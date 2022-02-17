import axios from "axios";
import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../loader/loader";
import Error from "../error/error";
import "./login.css";

const Login = ({ setSignUp, signUp, movePage, setMovePage }) => {
  const [email, setEmail] = useState();
  const [password, sePassword] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setMovePage(!movePage);
  };

  const handleChange = (e) => {
    setError(false);
    switch (e.target.id) {
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        sePassword(e.target.value);
        break;
      default:
        break;
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const userLoginDetailes = {
      email: email,
      password: password,
    };
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      setLoading(true);
      await axios
        .post("https://metors-server.herokuapp.com/", userLoginDetailes, config)
        .then((theUser) => {
          localStorage.setItem("token", theUser.data.token);
          localStorage.setItem("userInfo", JSON.stringify(theUser.data.user));
          setSignUp(!signUp);
          navigate("/");
        })
        .catch((error) => {
          setError(true);
        });
      setLoading(false);
    } catch {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className="logInPage">
      <div className="logInContainer">
        <div className="logIn">
          <p>LOG IN</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="email">Enter your email:</label>
          <input
            type="text"
            placeholder="Email"
            name="email"
            id="email"
            required
            onChange={handleChange}
          ></input>
          <label htmlFor="password">Enter your password:</label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            required
            onChange={handleChange}
          ></input>
          <div className="submit">
            <input type="submit" value="LOG IN" className="submitBtn" />
          </div>
          <div className="signUpDiv">
            Don't have an account yet?&nbsp;
            <span className="signUpSpan" onClick={handleClick}>
              Sign up
            </span>
            {loading && <Loader />}
            {error && <Error />}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

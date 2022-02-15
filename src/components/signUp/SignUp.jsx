import axios from "axios";
import { React, useState } from "react";
import Error from "../error/error";
import Loader from "../loader/loader";
import { useNavigate } from "react-router-dom";

import "./signUp.css";

const SignUpPage = ({ movePage, setMovePage }) => {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [email, setEmail] = useState();
  const [password, sePassword] = useState();
  const [city, setCity] = useState();
  const [role, setRole] = useState();
  const [picture, setPicture] = useState();
  const [yearsOfExperience, setYearsOfExperience] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setMovePage(!movePage);
  };

  const handleChange = (e) => {
    setError(false);
    switch (e.target.id) {
      case "firstName":
        setFirstName(e.target.value);
        break;
      case "lastName":
        setLastName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        sePassword(e.target.value);
        break;
      case "role":
        setRole(e.target.value);
        break;
      case "city":
        setCity(e.target.value);
        break;
      case "picture":
        setPicture(e.target.value);
        break;
      case "yearsOfExperience":
        setYearsOfExperience(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      yearsOfExperience: yearsOfExperience,
      city: city,
      picture: picture,
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
        .post(
          "https://distracted-euclid-f15421.netlify.app/api/users/signup",
          user,
          config
        )
        .then(() => {
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
    <div className="signUpPage">
      <div className="signUpContainer">
        <div className="signUp">
          <p>SIGN UP</p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <label htmlFor="firstName">Enter your first name:</label>
          <input
            type="text"
            placeholder="First name"
            name="firstName"
            id="firstName"
            required
            onChange={handleChange}
          ></input>
          <label htmlFor="lastName">Enter your last name:</label>
          <input
            type="text"
            placeholder="Last name"
            name="lastName"
            id="lastName"
            required
            onChange={handleChange}
          ></input>
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
          <label htmlFor="city">Enter your city:</label>
          <input
            type="text"
            placeholder="City"
            name="city"
            id="city"
            onChange={handleChange}
          ></input>
          <label htmlFor="role">Enter your role:</label>
          <input
            type="text"
            placeholder="Role"
            name="role"
            id="role"
            onChange={handleChange}
          ></input>
          <label htmlFor="yearsOfExperience">
            Enter your years of Experience:
          </label>
          <input
            type="text"
            placeholder="years of Experience"
            name="yearsOfExperience"
            id="yearsOfExperience"
            onChange={handleChange}
          ></input>
          <label htmlFor="picture">Upload profile picture:</label>
          <input
            type="file"
            id="picture"
            name="picture"
            onChange={handleChange}
          />
          <div className="submit">
            <input type="submit" value="SIGN UP" className="submitBtn" />
          </div>
          {error && <Error />}
          {loading && <Loader />}
          <div className="signUpDiv">
            Have an account?&nbsp;
            <span className="signUpSpan" onClick={handleClick}>
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;

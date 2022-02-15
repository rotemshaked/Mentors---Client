import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router";
import { useState } from "react";
import HomePage from "./pages/homePage";
import Header from "./components/headers/headers";
import MentorsPage from "./pages/mentorsPage";
import Profile from "./components/profile/profile";
import LoginAndSignUp from "./components/loginAndSignUp";
import Error from "./components/error/error";

function App() {
  const [signUp, setSignUp] = useState(false);

  return (
    <BrowserRouter>
      <Header setSignUp={setSignUp} signUp={signUp} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mentors" element={<MentorsPage />} />
        <Route
          path="/login"
          element={<LoginAndSignUp setSignUp={setSignUp} signUp={signUp} />}
        />
        <Route path="/profile" element={<Profile setSignUp={setSignUp} />} />
        <Route path={`/:category`} element={<MentorsPage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

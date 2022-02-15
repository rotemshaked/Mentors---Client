import { React, useState } from "react";
import SignUpPage from "./signUp/SignUp";
import Login from "./login/login";

const LoginAndSignUp = ({ signUp, setSignUp }) => {
  const [movePage, setMovePage] = useState(true);

  return (
    <div>
      {movePage ? (
        <Login
          signUp={signUp}
          setSignUp={setSignUp}
          movePage={movePage}
          setMovePage={setMovePage}
        />
      ) : (
        <SignUpPage
          movePage={movePage}
          setMovePage={setMovePage}
          setSignUp={setSignUp}
        />
      )}
    </div>
  );
};

export default LoginAndSignUp;

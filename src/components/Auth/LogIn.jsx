import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogIn = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });

  const [tok, setTok] = useState();
  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8005/users/logIn", values)
      .then((res) => {
        // console.log(res.data.token);
        console.log(res);
        const token = res.data.token;
        // console.log(token);
        localStorage.setItem("tks", JSON.stringify(token));

        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
    setTok(true);
  };

  // console.log(tok);
  return (
    <div>
      <div>
        <div className="border border-gray-200 flex m-4">
          <div className="border border-gray-200 flex mx-8 m-2 p-2">
            <Link to="/">Main page</Link>
          </div>
          <div className="border border-gray-200 flex mx-8 m-2 p-2">
            <Link to="/signUp">Sign Up</Link>
          </div>
        </div>
        <div>
          <form onSubmit={submitForm}>
            <label htmlFor="username">Enter username</label>
            <br />
            <input
              type="text"
              placeholder="Fisrt name"
              name="username"
              onChange={(e) =>
                setValues({ ...values, username: e.target.value })
              }
            />
            <br />
            <label htmlFor="password">Enter password</label>
            <br />
            <input
              type="text"
              placeholder="Password"
              name="password"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
        {tok == undefined ? (
          <h1>please log in</h1>
        ) : (
          <h1>USER DONT EXIST PLEASE SIGN UP</h1>
        )}
      </div>
    </div>
  );
};

export default LogIn;

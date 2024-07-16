import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    username: "",
    password: "",
    gender: "",
    city: "",
  });

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8005/users/signUp/", values)
      .then((res) => {
        const token = res.data.token;
        console.log(token);
        localStorage.setItem("tks", JSON.stringify(token));
        navigate("/dashboard");
        console.log(res);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div>
        <div>
          <div className="border border-gray-200 flex m-4">
            <div className="border border-gray-200 flex mx-8 m-2 p-2">
              <Link to="/">Main page</Link>
            </div>
            <div className="border border-gray-200 flex mx-8 m-2 p-2">
              <Link to="/logIn">log in</Link>
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
              <label htmlFor="gender">Enter gender</label>
              <br />
              <input
                type="text"
                placeholder="gender"
                name="gender"
                onChange={(e) =>
                  setValues({ ...values, gender: e.target.value })
                }
              />
              <br />
              <label htmlFor="city">Enter city</label>
              <br />
              <input
                type="text"
                placeholder="city"
                name="city"
                onChange={(e) => setValues({ ...values, city: e.target.value })}
              />
              <br />
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

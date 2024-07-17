import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [values, setValues] = useState({
    fullName : "" ,
    email : "" ,
    username: "",
    password: "",
    // gender: "",
    // city: "",
  });


  const handleChange = (e) => {
    // console.log(e.target.value);
    // console.log(e.target.name);
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    console.log(values);
  };



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

          <section className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
              <Link
                to="#"
                className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img
                  className="w-8 h-8 mr-2"
                  src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
                  alt="logo"
                />
                Flowbite
              </Link>
              <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create an account
                  </h1>
                  <form onSubmit={submitForm} className="space-y-4 md:space-y-6" >
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="Ex :- John Doe"
                        onChange={handleChange}
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Your email
                      </label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="name@company.com"
                        onChange={handleChange}
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="username"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Create username
                      </label>
                      <input
                        type="text"
                        name="username"
                        id="username"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="@robert123"
                        onChange={handleChange}
                        required=""
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleChange}
                        required=""
                      />
                    </div>
                    {/* <div>
                      <label
                        htmlFor="confirm-password"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Confirm password
                      </label>
                      <input
                        type="confirm-password"
                        name="confirm-password"
                        id="confirm-password"
                        placeholder="••••••••"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={handleChange}
                        required=""
                      />
                    </div> */}
                    {/* <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          aria-describedby="terms"
                          type="checkbox"
                          className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                          required=""
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="terms"
                          className="font-light text-gray-500 dark:text-gray-300"
                        >
                          I accept the{" "}
                          <Link
                            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                            to="#"
                          >
                            Terms and Conditions
                          </Link>
                        </label>
                      </div>
                    </div> */}
                    <button
                      type="submit"
                      className="w-full text-gray-700 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                      Create an account
                    </button>
                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                      Already have an account?{" "}
                      <Link
                        to="#"
                        className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      >
                        Login here
                      </Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* <div>
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default SignUp;

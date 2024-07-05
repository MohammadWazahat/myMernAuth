import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const GetAllusers = () => {
  const [myUser, setMyUser] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8005/users/", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("tks")}`,
        },
      });
      setMyUser(res.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div>i am Main Page</div>
      <div className="border border-gray-200 flex m-4">
        <div className="border border-gray-200 flex mx-8 m-2 p-2">
          <Link to="/logIn">log in</Link>
        </div>
        <div className="border border-gray-200 flex mx-8 m-2 p-2">
          <Link to="/signUp">Sign Up</Link>
        </div>
      </div>
      <div>
        {myUser.map((item, index) => {
          return (
            <div className=" " key={index}>
              <div>{item.username}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GetAllusers;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [myUser, setMyUser] = useState([]);

  useEffect(() => {
    console.log("i m useeffetct");
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8005/users/", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("tks")}`,
          },
        });
        console.log(res.data);
        setMyUser(res.data);
      } catch (err) {
        console.log(err);
        setMyUser(null);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      i am dashboard
      <div>
        <div className="border border-gray-200 flex m-4">
          <div className="border border-gray-200 flex mx-8 m-2 p-2">
            <Link to="/logIn">log in</Link>
          </div>
          <div className="border border-gray-200 flex mx-8 m-2 p-2">
            <Link to="/signUp">Sign Up</Link>
          </div>
        </div>
        <div>
          {!myUser ? (
            <div> session expired </div>
          ) : (
            myUser.map((item, index) => {
              return (
                <div className=" " key={index}>
                  <div>{item.username}</div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

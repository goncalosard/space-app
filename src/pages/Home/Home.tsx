import React, { useState, useEffect } from "react";
import "./Home.css";
import moon from "../../images/moon.png";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((response) => response.json())
      .then((data) => {
        console.log(data[3].name);
        setPosts(data[3].name);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="home">
      <img className="moon" src={moon} alt="Italian Trulli"></img>

      <div className="name">{posts}</div>
    </div>
  );
};

export default Home;

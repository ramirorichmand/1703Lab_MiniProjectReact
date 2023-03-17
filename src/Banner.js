import React, { useEffect, useState } from "react";
import axios from "./axios";
import requests from "./requests";
import "./banner.css";

//  This component defines Banner section for this website
const Banner = () => {
  const [movie, setMovie] = useState([]);

  // "useEffect" hook is used to fetch data from the "fetchNetflixOriginals" endpoint using the "axios" library,
  useEffect(() => {
    async function fetchData() {
      //  async function send a Get request to the fetchNetFlixOriginal end point axios library

      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
          // the index is always less than the length of the array -1
        ]
      );
    }
    fetchData();
    // hook should only called once
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        // base url for tmdb api
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-content">
        <h1 className="banner-title">
          {/* optional chaining */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <h1 className="banner-description">{movie?.overview}</h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default Banner;

import React from "react";

import "./heroBanner.scss";

const HeroBanner = () => {
  return (
    <div className="HeroBanner">
      <div className="wrapper">
        <div className="heroBannerContent">
          <span className="title">Welcome</span>
          <span className="subTitle">
            Millions of movies, TV shows and people to discover. Explore now.
          </span>
          <div className="searchInput">
            <input
              type="text"
              name=""
              placeholder="search for a movie or TV show..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;

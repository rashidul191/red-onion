import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div id="banner-section" >
      <div className="container">
        <div className="w-75 mx-auto pt-sm-5">
          <h1 className="text-center pt-sm-5 ">Best food waiting for your belly</h1>
          <form class="d-flex" role="search">
            <input
              class="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React, { useState } from "react";
import "../styles/Navbar.css";

export default function Navbar(props) {
  const [Input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(Input);
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">
          <img
            src="https://www.freepnglogos.com/uploads/pinterest-logo-p-png-0.png"
            alt="pinterest logo P png"
          />
        </div>
        <div className="mainButtons">
          <button className="HomeBtn">Home</button>
          <button className="TodayBtn">Today</button>
        </div>
        <div className="searchbar">
          <form action="">
            <i className="material-icons">search</i>
            <input
              className="search_box"
              type="text"
              placeholder="Search"
              onChange={(e) => {
                setInput(e.target.value);
              }}
            />
            <button
              type="submit"
              onClick={onSearchSubmit}
              style={{ display: "none" }}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

Navbar.defaultProps = {
  Home: "Home",
  Today: "Today",
};

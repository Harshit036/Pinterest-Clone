import React, { useState } from "react";
import Dropdown from "./Dropdown";
import "../styles/Navbar.css";

export default function Navbar(props) {
  const [Input, setInput] = useState("");

  const onSearchSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(Input);
  };

  return (
    <>
      <div className="navbar_pinterest">
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
        <div className="icons_right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-bell-fill"
            viewBox="0 0 16 16"
            style={{ color: "grey" }}
          >
            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            class="bi bi-chat-dots-fill"
            viewBox="0 0 16 16"
            style={{ color: "grey" }}
          >
            <path d="M16 8c0 3.866-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.584.296-1.925.864-4.181 1.234-.2.032-.352-.176-.273-.362.354-.836.674-1.95.77-2.966C.744 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7zM5 8a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
          </svg>
          <Dropdown></Dropdown>
        </div>
      </div>
    </>
  );
}

Navbar.defaultProps = {
  Home: "Home",
  Today: "Today",
};

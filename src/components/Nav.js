import piggy from "../porco.png";
import React from "react";

const Nav = () => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <a href="https://giphy.com/search/piglets">
          <img src={piggy} className="App-logo" alt="piggy" />
        </a>
      </div>
      <h3 className="smallHeader">A React App for County Fair Hog Fans</h3>
    </div>
  );
};

export default Nav;

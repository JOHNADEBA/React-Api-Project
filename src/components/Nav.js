import { Link } from "react-router-dom";
import React, { useState } from "react";

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  let menu;
  if (showMenu) {
    menu = (
      <div
        style={{ zIndex: "1" }}
        className=" absolute br2 left-0 top-0 white  w-30 bg-gray"
      >
        <h2 className="tc f2 ma2">Menu</h2>
        <hr className="tc ma2 o-50" />
        <div className="flex flex-column ">
          <Link
            onClick={() => setShowMenu(false)}
            className=" ph3 pv2 f4 dim white no-underline"
            to="/"
          >
            Home
          </Link>
          <hr className="tc ma2 o-50" />
          <Link
            onClick={() => setShowMenu(false)}
            className=" ph3 pv2 f4 dim white no-underline"
            to="./about"
          >
            About
          </Link>
          <hr className="tc ma2 o-50" />
          <Link
            onClick={() => setShowMenu(false)}
            className="ph3 pv2 f4 dim white no-underline"
            to="./contact"
          >
            Contact
          </Link>
          <hr className="tc ma2 o-50" />
          <Link
            onClick={() => setShowMenu(false)}
            className="ph3 pt2 pb3 f4 dim white no-underline"
            to="./photo/"
          >
            Photo
          </Link>
        </div>
      </div>
    );
  }
  return (
    <nav>
      <i
        className="fas fa-bars mr3 f3 dim"
        onClick={() => {
          setShowMenu(!showMenu);
        }}
      ></i>
      {menu}
    </nav>
  );
};

export default Nav;

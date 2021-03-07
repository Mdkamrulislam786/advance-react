import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
let navs = [
  {
    nav: "Home",
    to: "/",
  },
  {
    nav: "Hooks",
    to: "/hooks",
  },
  {
    nav: "Suspense",
    to: "/suspense",
  },
  {
    nav: "PureComponent",
    to: "/purecomponent",
  },
  {
    nav: "Refs",
    to: "/refs",
  },
   {
    nav: "Portals",
    to: "/portals",
  },
];

const Layout = (props) => {
  return (
    <>
      <nav className="navbar">
        <ul>
          {navs.map((item, i) => (
            <li key={i}>
              <Link to={item.to}>{item.nav}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {props.children}
    </>
  );
};

export default Layout;

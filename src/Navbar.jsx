import { FaBars } from "react-icons/fa";
import logo from "./assets/logo.png";
import Links from "./Links";
import { links, social } from "./data";
import Icons from "./Icons";
import { useState, useRef } from "react";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksRef = useRef(null);

  function toggleLinks() {
    setShowLinks(!showLinks);
  }
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="" className="logo" />

          <button onClick={toggleLinks} className="nav-btn">
            <FaBars />
          </button>
        </div>
        <Links showLinks={showLinks} linksRef={linksRef} items={links} />
        <Icons items={social} />
      </div>
    </nav>
  );
}

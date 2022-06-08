import "../styles/styleNavBar.css";

import { Link } from "react-router-dom";

import logoAnime from "../assets/logoAnime.png";
import backPage from "../assets/back.png";
import { redirectLink } from "./Link";

export function NavBar() {
  return (
    <nav className="nav-bar2">
      <Link onClick={() => redirectLink("/")} className="back-container">
        <img src={backPage} alt="back page" className="back" />
      </Link>
      <div className="content-center">
        <img src={logoAnime} alt="logo anime" />
      </div>
    </nav>
  );
}

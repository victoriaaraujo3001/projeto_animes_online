import logo from "../assets/logoAnime.png";
import favorites from "../assets/favorites.png";
import account from "../assets/account.png";
import { redirectLink } from "../components/Link";

import { Link } from "react-router-dom";

import "../styles/styleNavBar.css";

export default function NavBarHome() {
  return (
    <nav className="nav-bar">
      <div className="side">
        <img src={logo} alt="logo-site" className="logo-site" />
        <h6 className="title-page">animes online</h6>
      </div>
      <div className="config">
        {/* <input
          type="search"
          className="search-input"
          placeholder="one piece..."
        /> 
        <Link to="/favorites">
          <img src={search} alt="search"/>
        </Link>*/}
        <Link onClick={() => redirectLink("/favorites")}>
          <img src={favorites} alt="favorites" />
        </Link>
        <Link onClick={() => redirectLink("/account")}>
          <img src={account} alt="account" />
        </Link>
      </div>
    </nav>
  );
}

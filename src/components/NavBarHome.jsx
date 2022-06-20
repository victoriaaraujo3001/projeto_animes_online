import logo from "../assets/logoAnime.png";
import favorites from "../assets/favorites.png";
import account from "../assets/account.png";
import categories from "../assets/categorias.png";
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
        <Link
          onClick={() => redirectLink("/categories")}
          style={{ textDecoration: "none" }}
        >
          <img src={categories} alt="categorias" />
          <span className="title-config">categorias</span>
        </Link>
        <Link
          onClick={() => redirectLink("/favorites")}
          style={{ textDecoration: "none" }}
        >
          <img src={favorites} alt="favorites" />
          <span className="title-config">favoritos</span>
        </Link>
        <Link
          onClick={() => redirectLink("/account")}
          style={{ textDecoration: "none" }}
        >
          <img src={account} alt="account" />
          <span className="title-config">conta</span>
        </Link>
      </div>
    </nav>
  );
}

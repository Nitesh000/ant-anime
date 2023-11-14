import { NavLink, useNavigate } from "react-router-dom";
import { BiSearchAlt } from "react-icons/bi/index";
import ModeChanger from "./ModeChanger";
import "./Header.css";
import { useState } from "react";

const Header = () => {
  const [anime, setAnime] = useState("");
  const navigate = useNavigate();

  {
    /* NOTE: finding anime.*/
  }
  const findAnime = () => {
    navigate(`/search/${anime}`);
  };

  const findAnimeOnEnter = (e: any) => {
    if (e.key === "Enter") findAnime();
  };

  return (
    <div className="header-container">
      <h2 onClick={() => navigate("/")}>Kuro-Neko</h2>
      <div className="link-container">
        <NavLink
          to="/tracking"
          className={({ isActive }) => (isActive ? "onLink" : "link")}
        >
          Traking
        </NavLink>
        <NavLink to="/user" className="link">
          User
        </NavLink>
        <div className="search-container">
          <input
            type="text"
            className="header-input"
            placeholder="Search anime"
            value={anime}
            onChange={(e) => setAnime(e.target.value)}
            onKeyDown={findAnimeOnEnter}
          />
          <div className="icon" onClick={findAnime}>
            <BiSearchAlt />
          </div>
          {/*<button className="search-button">Search</button>*/}
        </div>
        <div className="mode">
          <ModeChanger />
        </div>
      </div>
    </div>
  );
};

export default Header;

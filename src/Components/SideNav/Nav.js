import React from "react";
import styles from "./Nav.module.css";
import logo from "../../Assets/images/disneyplus-hotstar-logo-freelogovectors.net_.webp";
import home from "../../Assets/images/home_Icon_design.png";
import search from "../../Assets/images/search_Icon_design.png";
import movies from "../../Assets/images/movie_Icon_design (2).png";
import tv from "../../Assets/images/tv_Icon_design (2).png";
import person from "../../Assets/images/person_Icon_design.png";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_logo}>
        <Link to="/">
          <img src={logo} alt="Disney+ Hotsrat logo" />
        </Link>
      </div>
      <div className={styles.nav_items}>
        <div className={styles.nav_comp}>
          <Link to="/myspace"><span>
            <img src={person} alt="My Space" />
          </span></Link>
          <span>
            <h4>My Space</h4>
          </span>
        </div>
        <div className={styles.nav_comp}>
          <Link to="/search">
            <span>
              <img src={search} alt="Search" />
            </span>
          </Link>
          <span>
            <h4>Search</h4>
          </span>
        </div>
        <div className={styles.nav_comp}>
          <Link to="/">
            <span>
              <img src={home} alt="Home" />
            </span>
          </Link>
          <span>
            <h4>Home</h4>
          </span>
        </div>
        <div className={styles.nav_comp}>
          <Link to="/movies"><span>
            <img src={movies} alt="Movies" />
          </span></Link>
          <span>
            <h4>Movies</h4>
          </span>
        </div>
        <diV className={styles.nav_comp}>
          <Link to="/tv-shows"><span>
            <img src={tv} alt="TV" />
          </span></Link>
          <span>
            <h4> TV</h4>
          </span>
        </diV>
      </div>
    </div>
  );
};

export default Nav;

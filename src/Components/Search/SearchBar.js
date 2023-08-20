import styles from "./SearchBar.module.css";
import search from "../../Assets/images/search-icon.svg";

import React from 'react'

const SearchBar = (props) => {
  return (
    <div className={styles.searchContainer}>
        <div className={styles.searchLogo}>
            <img src={search} alt=""/>
        </div>
        <div className={styles.searchInput}><input onChange={props.onQuery} type="text" placeholder="Movies, Shows and More...."/></div>
    </div>
  )
}
export default SearchBar;
import styles from "./NotFound.module.css";
import img404 from "../../Assets/images/404.jpg";
import React from 'react'

const NotFound = () => {
  return (
    <div  className={styles.notfound}><img src={img404} alt=""/></div>
  )
}
export default NotFound;

import styles from "./LayOut.module.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
// import { NavLink } from "react-router-dom";

import React,{useState} from 'react';

const LayOut = (props) => {
    const [isVideoActive,setVideoActive]=useState(false);
    const [isSimilarActive,setSimilarActive]=useState(false);
    const silimarActiveHandler=()=>{
        setSimilarActive(true);
        setVideoActive(false);
        // console.log("clicked");
    }
    const videosActiveHandler=()=>{
        setSimilarActive(false);
        setVideoActive(true);
    }
  return (
    <div className={styles.layoutContainer}>
        <div className={styles.layoutTitle}>
            <h3 onClick={silimarActiveHandler} className={ isSimilarActive ? styles.active : ""}><AnchorLink  href="#similar">More Like This</AnchorLink></h3>
            <h3 onClick={videosActiveHandler} className={isVideoActive ? styles.active : ""}><AnchorLink  href="#videos">Trailers & More</AnchorLink></h3>
        </div>
        <div className={styles.underline}/>
    </div>
  )
}
export default LayOut;

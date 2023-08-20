import styles from "./providers.module.css";
import disney from "../../Assets/images/viewers-disney.png";
import marvel from "../../Assets/images/viewers-marvel.png";
import starwars from "../../Assets/images/viewers-starwars.png";
import natGo from "../../Assets/images/viewers-national.png";
import pixar from "../../Assets/images/viewers-pixar.png";
import disneyVideo from "../../Assets/videos/disney.mp4";
import marvelVideo from "../../Assets/videos/marvel.mp4";
import starwarsVideo from "../../Assets/videos/pixar.mp4";
import natGoVideo from "../../Assets/videos/star-wars.mp4";
import pixarVideo from "../../Assets/videos/national-geographic.mp4";

import React from "react";

const Providers = () => {
  return (
    <div className={styles.provider}>
      <div className={styles.ProviderImt}>
        <img src={disney} alt=""/>
        <video src={disneyVideo} className={styles.videoClass} autoPlay={true} loop muted={true} />
      </div>
      <div className={styles.ProviderImt}>
        <img src={pixar} alt=""/>
        <video src={pixarVideo} className={styles.videoClass} autoPlay={true} loop muted={true} />
      </div>
      <div className={styles.ProviderImt}>
        <img src={marvel} alt="" />
        <video src={marvelVideo} className={styles.videoClass} autoPlay={true} loop muted={true} />
      </div>
      <div className={styles.ProviderImt}>
        <img src={starwars} alt="" />
        <video src={starwarsVideo} className={styles.videoClass} autoPlay={true} loop muted={true} />
      </div>
      <div className={styles.ProviderImt}>
        <img src={natGo} alt=""/>
        <video src={natGoVideo} className={styles.videoClass} autoPlay={true} loop muted={true} />
      </div>
    </div>
  );
};
export default Providers;

import Banner from "../UI/Banner";
import styles from "./Poster.module.css";
import video from "../../Assets/videos/Hanuman.mp4";

const Poster = () => {

  return (
    <div className={styles.poster}>
     <Banner video={video}/>
    </div>
  )
}
export default Poster;

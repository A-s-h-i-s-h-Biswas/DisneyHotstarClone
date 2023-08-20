import styles from "./NoAuthPage.module.css";
import React, {  } from "react";
import { useSelector } from "react-redux";
import Card from "../UI/Card";

const WishList = () => {
  
  const list = useSelector((state) => state.wishlist.list);
  // console.log(list);
  return (
    <div className={styles.wishlistContainer}>
      {list?.map((item,id)=><Card key={id} img={item.img} videoKey={item.videoKey} data={item}/>)}
    </div>
  );
};
export default WishList;

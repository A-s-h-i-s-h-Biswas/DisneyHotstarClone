import Button from "../UI/Button";
import styles from "./NoAuthPage.module.css";
import img from "../../Assets/images/my_space_login_in.webp";
import React from 'react'
import { useSelector } from "react-redux";
const NoAuthPage = (props) => {
  const isLogin=useSelector(state=>state.auth.isLogin);
  return (
    <div className={styles.noAuthContainer}>
        <div className={styles.noAuthInfo}>
            <div className={styles.noAuthLogo}>
                <img  src={img} alt=""/>
            </div>
            {!isLogin && <div className={styles.noAuthText}>
                <h2>Login to Disney+ Hotstar</h2>
                <p>Start watching from where you left off, personalised for kids and more</p>
            </div>}
            {!isLogin && <Button onClick={props.onClickHandler} label={"Log In"}/>}
            {isLogin && <Button onClick={props.logOutHandler} label={"Log Out"}/>}
        </div>
    </div>
  )
}
export default NoAuthPage;
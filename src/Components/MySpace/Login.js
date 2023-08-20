import ModalContainer from "../UI/ModalContainer";
import styles from "./Login.module.css";
import React, { Fragment, useState, useRef } from "react";
// import img from "../../Assets/images/img1.webp";
import { ReactSlider } from "../UI/ReactSlider";
import Button from "../UI/Button";
import {auth } from "../../Store/firebase/firebase";
import { authSliceAction } from "../../Store/auth-slice";
import { useDispatch } from "react-redux";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
const img1="https://i.pinimg.com/236x/b5/ae/bd/b5aebded844589f2084685a93fe4bf8f--james-cameron-james-darcy.jpg";
const img4="https://static1.tribute.ca/poster/660x980/avatar-the-way-of-water-165258.jpg";
const img2="https://m.media-amazon.com/images/I/71niXI3lxlL._AC_UF894,1000_QL80_.jpg"
const img3="https://wallpapercave.com/wp/wp6670074.jpg";
const img5="https://m.media-amazon.com/images/M/MV5BOTNmNGIwZWItNDVlYy00YWVlLWFmNzAtMzdlYzlhYzAwYTJhXkEyXkFqcGdeQXVyMTY1MzAyNjU4._V1_.jpg";

const img6="https://i.pinimg.com/originals/75/6a/30/756a30668cd867a36e90d516017dee10.jpg";
// const img3="";

const Login = (props) => {
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  // const [isValid, setIsValid] = useState(false);
  const [login, setlogin] = useState(true);
  const dispatch=useDispatch();
  
  const footerText=!login ? "Having trouble logging in? " : "Dont't have an account? ";
  const footerSpan=!login ? "Get Help" : "Create Now";
  
  //Authentic user signin/signup
  const authenticateUser=(data)=>{
  data.type(auth, data.email, data.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // console.log(user);
    dispatch(authSliceAction.login({uid:user.uid, token:user.accessToken}));
    // console.log(credential);
    // ...
  })
  .catch((error) => {
    // const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage);
    // ..
  });
}

  const submitHandler = () => {
    const email = enteredEmail.current.value.trim();
    const password = enteredPassword.current.value.trim();
    if (
      email.length > 10 &&
      email.includes("@gmail.com") &&
      password.length >= 6
    ) {
      //send data to create new user/login in database
      authenticateUser({
        type: login
          ? signInWithEmailAndPassword
          : createUserWithEmailAndPassword,
        email: email,
        password: password,
      });
    }
  };
  const authHandler = () => {
    setlogin((prev) => !prev);
  };
  
  return (
    <Fragment>
      <ModalContainer onClick={props.onCloseModal} />
      <div className={styles.loginContainer}>
        <div className={styles.sliderContainer}>
          <div className={styles.slidingImg}>
            <ReactSlider
              img={{
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
              }}
            />
          </div>
          <div className={styles.slidingImg}>
            <ReactSlider
              rtl={true}
              img={{
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
              }}
            />
          </div>
          <div className={styles.slidingImg}>
            <ReactSlider
              img={{
                img1,
                img2,
                img3,
                img4,
                img5,
                img6,
              }}
            />
          </div>
        </div>
        <div className={styles.effect} />
        <div className={styles.inputContainer}>
          <div className={styles.inputInfo}>
            <h3>Login or Signup to Continue</h3>

            <input
              
              ref={enteredEmail}
              type="email"
              placeholder="Enter your email"
            />

            <input
              
              ref={enteredPassword}
              type="password"
              placeholder="Enter your password"
            />
          </div>
          
            <div className={styles.otpBtn}>
              <Button
                onClick={submitHandler}
                className={styles.Button}
                label={login ? "Continue   >" : "Join us +"}
              />
            </div>
        
          <div className={styles.troubleContainer}>
            <p>
              {footerText}
              <span onClick={authHandler}>{footerSpan}</span>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default Login;

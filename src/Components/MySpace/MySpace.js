import React, { Fragment, useEffect, useState } from "react";
import NoAuthPage from "./NoAuthPage";
import Login from "./Login";
import { useDispatch, useSelector } from "react-redux";
import WishList from "./WishList";
import { authSliceAction } from "../../Store/auth-slice";

const MySpace = () => {
  const [openLogin, setOpenLogin] = useState(false);
  // const [videoPlay,setVideoPlay]=useState(true);
  const isLogin = useSelector((state) => state.auth.isLogin);
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "unset";
  }, [isLogin]);

  const loginClickHandler = () => {
    setOpenLogin(true);
    document.body.style.overflow = "hidden";
  };
  const logOutHandler = () => {
    dispatch(authSliceAction.logout());
  };
  const loginCloseHandler = () => {
    setOpenLogin(false);
  };

  return (
    <Fragment>
      {
        <NoAuthPage
          onClickHandler={loginClickHandler}
          logOutHandler={logOutHandler}
        />
      }
      {!isLogin && openLogin && <Login onCloseModal={loginCloseHandler} />}
      {isLogin && <WishList />}
    </Fragment>
  );
};
export default MySpace;

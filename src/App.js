import Home from "./Components/Home/Home";
import Nav from "./Components/SideNav/Nav";
import { Routes, Route } from "react-router-dom";
import { Fragment,useState, useEffect } from "react";
import Search from "./Components/Search/Search";
import Movies from "./Components/Movies/Movies";
import { TVShows } from "./Components/TVShows/TVShows";
import Footer from "./Components/Footer/Footer";
import Details from "./Components/Details/Details";
import NotFound from "./Components/404/NotFound";
import { collection, getDocs } from "firebase/firestore";
import MySpace from "./Components/MySpace/MySpace";
import { useDispatch,useSelector } from "react-redux";
import { authSliceAction } from "./Store/auth-slice";
import { db } from "./Store/firebase/firebase";
import { wishlistSliceAction } from "./Store/wishlist-slice";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const isAlreadyLoggedIn = localStorage.getItem("token");
    if (isAlreadyLoggedIn) {
      const data = {
        uid: localStorage.getItem("uid"),
        token: localStorage.getItem("token"),
      };
      // console.log("im from app auth");
      dispatch(authSliceAction.login(data));
    }
  }, [dispatch]);

  const userId=useSelector(state=>state.auth.uid);
  const [length,setLength]=useState();
  useEffect(() => {
    // console.log("im from app wishlist");
    const getAllList = async () => {
      const items = [];
      const querySnapshot = await getDocs(collection(db, userId));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        const item = { id: doc.id, ...doc.data() };
        items.push(item);
      });
      setLength(items.length);
      
      dispatch(wishlistSliceAction.addAllToWishlist(items));
    };
    userId && getAllList();
  }, [dispatch,userId,length]);

  return (
    <Fragment>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/search" element={<Search />} exact />
        <Route path="/movies" element={<Movies />} exact />
        <Route path="/tv-shows" element={<TVShows />} exact />
        <Route path="/myspace" element={<MySpace />} exact />
        <Route path="/:path/:id/details" element={<Details />} exact />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;

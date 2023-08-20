
import React, { Fragment,useEffect } from "react";
import Banner from "../UI/Banner";
import LayOut from "./LayOut";
import {RequestAPIData} from "../../API/RequestAPIData";
import { RequestVideoData } from "../../API/RequestVideoData";
import { useSelector,useDispatch } from "react-redux";
import { detailSliceAction } from "../../Store/details-slice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../Store/firebase/firebase";


const Details = (props) => {
  const userId=useSelector(state=>state.auth.uid);
  const dispatch=useDispatch();
  const id = useSelector((state) => state.details.id);
  
  useEffect(() => {
    const getAllList = async () => {
      const docRef = doc(db, "itemDetails", userId);
      const docSnap = await getDoc(docRef);
      // console.log("im from details.............");
      if (docSnap.exists()) {
        // console.log("Document data:", docSnap.data());
        dispatch(detailSliceAction.addData(docSnap.data()));
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getAllList();
  }, [dispatch,userId,id]);

  const list=useSelector(state=>state.wishlist.list);
  const isFound=list?.find(item=>item.id===id);

  const added=isFound? true:false;
  const videoKey = useSelector((state) => state.details.videoId);
  const type = useSelector((state) => state.details.type);
  const rating = useSelector((state) => state.details.rating);
  const img = useSelector((state) => state.details.img);
  const title = useSelector((state) => state.details.title);
  const lang = useSelector((state) => state.details.lang);
  const releaseDate = useSelector((state) => state.details.releaseDate);
  const description = useSelector((state) => state.details.description);
  let data = { id,added, videoKey, type, img, rating, lang, title, releaseDate, description };
 
  const dataEndndPoint = `${data.type}/${data.id}/recommendations`;
  if(data.id===null)return <p>Data is loading.....</p>;
  return (
    <Fragment>
      <Banner  data={data} />
      <LayOut />
      <RequestAPIData id="similar" title={"More Like This"} endPoint={dataEndndPoint} />
      <RequestVideoData id="videos" title={"Trailers & More"} videoId={data.id} type={data.type} img={data.img} />

    </Fragment>
  );
};
export default Details;


import styles from "./RequestAPI.module.css";
import React, { useState, useEffect } from "react";
import { ImageBase, fetchData } from "./API";
import SlidingContainer from '../Components/UI/SlidingContainer';
import ItemWrapper from '../Components/UI/ItemWrapper';

export const RequestAPIData = (props) => {
    const endPoint = props.endPoint;
    const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await fetchData(endPoint);
      setData(res?.results);
    };
    getData();
    // console.log("i'm from "+props.title);
    // console.log(data);
  
  }, [endPoint]);
  let nodata=<p style={{fontSize:"1rem", textAlign:"center"}}>Data Not Available!!!</p>;
  if(data?.length===0){
    // setTimeout(()=>{nodata=<p style={{fontSize:"1rem", textAlign:"center"}}>No Data Found!!!</p>},10)
    return nodata;
  }

  return (
    <div className={styles.onContainer} id={props.id}>
      <h4>{props.title}</h4>
      <SlidingContainer>
        {data?.map((item, id) => (
          <ItemWrapper
            key={id}
            id={item.id}
            img={`${ImageBase}${item.poster_path || item.backdrop_path}`}
            title={item.title || item.original_title || item.name || item.original_name}
            lang={item.original_language === 'hi' ? "Hindi" : (item.original_language === 'en' ? "English" :(item.original_language === 'te' ? "Telegu" :(item.original_language === 'ta' ? "Tamil" : (item.original_language === 'ka' ? "Kanada" :(item.original_language === 'pu' ? "Punjabi":(item.original_language === 'be' ? "Bengali" : "Foreign") )))))}
            releaseDate={item.release_date || item.first_air_date}
            rating={item.vote_average}
            description={item.overview}
            type={(item.title || item.original_title) ? "movie":"tv"}
          />
        ))}
      </SlidingContainer>
    </div>
  );
};



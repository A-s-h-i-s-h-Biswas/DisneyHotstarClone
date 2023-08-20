import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const ComedyShows = () => {
    const endPoint = "discover/tv?language=hi&with_genres=35&with_origin_country=IN&with_original_language=hi";
  
  return (
    <RequestAPIData title='Comedy Shows' endPoint={endPoint}/>
  )
}
export default ComedyShows;
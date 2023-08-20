import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const RealityShows = () => {
    const endPoint = "discover/tv?language=hi&with_genres=10764&with_origin_country=IN&with_original_language=hi";
  
  return (
    <RequestAPIData title='Reality Shows' endPoint={endPoint}/>
  )
}
export default RealityShows;
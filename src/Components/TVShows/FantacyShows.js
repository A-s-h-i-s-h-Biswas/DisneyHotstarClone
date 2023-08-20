import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const FantacyShows = () => {
    const endPoint = "discover/tv?language=hi&with_genres=10765&with_origin_country=IN&with_original_language=hi";
  
  return (
    <RequestAPIData title='Fantacy Shows' endPoint={endPoint}/>
  )
}
export default FantacyShows;
import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const TalkShows = () => {
    const endPoint = "discover/tv?language=hi&with_genres=10767&with_origin_country=IN&with_original_language=hi";
  
  return (
    <RequestAPIData title='Talk Shows' endPoint={endPoint}/>
  )
}
export default TalkShows;
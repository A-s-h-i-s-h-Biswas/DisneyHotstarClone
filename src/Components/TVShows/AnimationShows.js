import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const AnimationShows = () => {
    const endPoint = "discover/tv?language=hi&with_genres=16&with_origin_country=IN&with_original_language=hi";
  
  return (
    <RequestAPIData title='Animation Shows' endPoint={endPoint}/>
  )
}
export default AnimationShows;
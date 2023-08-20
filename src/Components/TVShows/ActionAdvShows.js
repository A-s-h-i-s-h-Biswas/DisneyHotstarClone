import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const ActionAdvShows = () => {
    const endPoint = "discover/tv?language=hi&with_genres=10759&with_origin_country=IN&with_original_language=hi";
  
  return (
    <RequestAPIData title='Action & Adventure Shows' endPoint={endPoint}/>
  )
}
export default ActionAdvShows;
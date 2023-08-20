import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const FamilyShows = () => {
    const endPoint = "discover/tv?vote_average.lte=10&language=hi&with_genres=10751&with_origin_country=IN&with_original_language=hi";
  
  return (
    <RequestAPIData title='Family Shows' endPoint={endPoint}/>
  )
}
export default FamilyShows;
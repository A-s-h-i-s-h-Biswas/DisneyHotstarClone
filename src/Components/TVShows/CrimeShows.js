import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const CrimeShows = () => {
    const endPoint = "discover/tv?language=hi&with_genres=80&with_origin_country=IN&with_original_language=hi";
  
  return (
    <RequestAPIData title='Crime Shows' endPoint={endPoint}/>
  )
}
export default CrimeShows;
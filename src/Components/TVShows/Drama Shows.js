import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const DramaShows = () => {
    const endPoint = "discover/tv?vote_average.lte=9.5&language=hi&with_genres=18&with_origin_country=IN&with_original_language=hi&page=2";
  
  return (
    <RequestAPIData title='Drama Shows' endPoint={endPoint}/>
  )
}
export default DramaShows;
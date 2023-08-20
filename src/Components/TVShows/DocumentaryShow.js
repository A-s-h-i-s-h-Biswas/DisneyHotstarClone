import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const DocumentaryShows = () => {
    const endPoint = "discover/tv?language=hi&with_genres=99&with_origin_country=IN&with_original_language=hi";
  
  return (
    <RequestAPIData title='Document Shows' endPoint={endPoint}/>
  )
}
export default DocumentaryShows;
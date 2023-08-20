import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const KinsShow = () => {
    const endPoint = "discover/tv?language=hi&with_genres=10762&with_origin_country=IN&with_original_language=hi";
  
  return (
    <RequestAPIData title='Kids Shows' endPoint={endPoint}/>
  )
}
export default KinsShow;
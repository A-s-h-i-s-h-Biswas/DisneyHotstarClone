import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Action = () => {
    const endPoint="discover/movie?with_genres=28&with_origin_country=IN&with_original_language=hi";
    // const endPoint=`discover/movie?include_video=true&language=hindi&region=india&watch_region=india&with_genres=${12}&with_origin_country=india&with_original_language=hindi`;
  return (
    <RequestAPIData title='Action' endPoint={endPoint}/>
  )
}
export default Action;
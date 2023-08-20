import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Comedy = () => {
    const endPoint="discover/movie?with_genres=35&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='Comedy' endPoint={endPoint}/>
  )
}
export default Comedy;
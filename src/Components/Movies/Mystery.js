import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Mystery = () => {
    const endPoint="discover/movie?with_genres=9648&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='Mystery' endPoint={endPoint}/>
  )
}
export default Mystery;
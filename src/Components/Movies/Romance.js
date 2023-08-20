import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Romance = () => {
    const endPoint="discover/movie?with_genres=10749&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='Romance' endPoint={endPoint}/>
  )
}
export default Romance;
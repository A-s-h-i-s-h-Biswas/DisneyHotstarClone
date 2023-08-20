import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Drama = () => {
    const endPoint="discover/movie?with_genres=18&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='Drama' endPoint={endPoint}/>
  )
}
export default Drama;
import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Adventure = () => {
    const endPoint="discover/movie?with_genres=12&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='Adventure' endPoint={endPoint}/>
  )
}
export default Adventure;
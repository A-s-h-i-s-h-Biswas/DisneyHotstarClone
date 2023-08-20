import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const War = () => {
    const endPoint="discover/movie?with_genres=10752&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='War' endPoint={endPoint}/>
  )
}
export default War;
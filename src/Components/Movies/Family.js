import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Family = () => {
    const endPoint="discover/movie?with_genres=10751&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='Family' endPoint={endPoint}/>
  )
}
export default Family;
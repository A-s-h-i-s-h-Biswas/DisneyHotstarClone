import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Documentary = () => {
    const endPoint="discover/movie?with_genres=99&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='Documentary' endPoint={endPoint}/>
  )
}
export default Documentary;
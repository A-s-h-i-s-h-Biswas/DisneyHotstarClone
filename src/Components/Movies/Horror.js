import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Horror = () => {
    const endPoint="discover/movie?with_genres=27&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='Horror' endPoint={endPoint}/>
  )
}
export default Horror;
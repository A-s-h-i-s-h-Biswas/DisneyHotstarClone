import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Crime = () => {
    const endPoint="discover/movie?with_genres=80&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='Crime' endPoint={endPoint}/>
  )
}
export default Crime;
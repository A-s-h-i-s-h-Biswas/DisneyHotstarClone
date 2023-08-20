import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const HistoryMv = () => {
    const endPoint="discover/movie?with_genres=36&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='History' endPoint={endPoint}/>
  )
}
export default HistoryMv;
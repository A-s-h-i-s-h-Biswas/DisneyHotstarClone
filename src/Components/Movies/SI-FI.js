import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const SiFi = () => {
    const endPoint="discover/movie?include_video=true&language=hindi&with_genres=878";
  return (
    <RequestAPIData title='SiFi' endPoint={endPoint}/>
  )
}
export default SiFi;
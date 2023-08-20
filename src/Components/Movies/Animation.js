import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const AnimationMv = () => {
    const endPoint="discover/movie?include_video=true&language=hindi&with_genres=16";
  return (
    <RequestAPIData title='Animation' endPoint={endPoint}/>
  )
}
export default AnimationMv;
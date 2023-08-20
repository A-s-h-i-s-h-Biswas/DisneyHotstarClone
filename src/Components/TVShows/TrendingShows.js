import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData';

const TrendingShows = () => {
    const endPoint = "tv/popular?language=hi&page=2";
  
  return (
    <RequestAPIData title='Trending Shows' endPoint={endPoint}/>
  )
}
export default TrendingShows;
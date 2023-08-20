import { RequestAPIData } from "../../API/RequestAPIData";

import React from 'react'

const BestOfStarWars = () => {
    let endPoint="search/multi?query=star-wars"
  return (
    <RequestAPIData title="Best of Star wars" endPoint={endPoint}/>
  )
}
export default BestOfStarWars;
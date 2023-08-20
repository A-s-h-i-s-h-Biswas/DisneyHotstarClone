import { RequestAPIData } from "../../API/RequestAPIData";

import React from 'react'

const BestOfKids = () => {
    let endPoint="search/multi?query=doremon"
  return (
    <RequestAPIData title="Best of Kids" endPoint={endPoint}/>
  )
}
export default BestOfKids;
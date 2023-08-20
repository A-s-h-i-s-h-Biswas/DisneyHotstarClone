import { RequestAPIData } from "../../API/RequestAPIData";

import React from 'react'

const Sports = () => {
    let endPoint="search/multi?query=marvel"
  return (
    <RequestAPIData title="Best of Marvel" endPoint={endPoint}/>
  )
}
export default Sports;
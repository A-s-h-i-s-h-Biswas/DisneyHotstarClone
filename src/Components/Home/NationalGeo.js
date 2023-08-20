import { RequestAPIData } from "../../API/RequestAPIData";

import React from 'react'

const NationalGeo = () => {
    let endPoint="search/multi?query=national-geographic&page=7"
  return (
    <RequestAPIData title="National Geographic" endPoint={endPoint}/>
  )
}
export default NationalGeo;
import { RequestAPIData } from "../../API/RequestAPIData";

import React from 'react'

const Pixar = () => {
    let endPoint="search/multi?query=pixar"
  return (
    <RequestAPIData title="Best of Pixar" endPoint={endPoint}/>
  )
}
export default Pixar;
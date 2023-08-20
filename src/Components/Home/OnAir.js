import { RequestAPIData } from "../../API/RequestAPIData";

import React from 'react'

const OnAir = () => {
    let endPoint="tv/on_the_air?language=hi&page=3"
  return (
    <RequestAPIData title="On The Air" endPoint={endPoint}/>
  )
}
export default OnAir;
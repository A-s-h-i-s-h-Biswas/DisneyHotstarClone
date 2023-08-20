import { RequestAPIData } from "../../API/RequestAPIData";

import React from 'react'

const Disney = () => {
    let endPoint="search/multi?query=disney"
  return (
    <RequestAPIData title="Best of Disney" endPoint={endPoint}/>
  )
}
export default Disney;
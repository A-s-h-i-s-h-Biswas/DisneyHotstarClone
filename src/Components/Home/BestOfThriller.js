import { RequestAPIData } from "../../API/RequestAPIData";

import React from 'react'

const BestOfThriller = () => {
    const endPoint="discover/movie?with_genres=53&with_origin_country=IN&with_original_language=hi&page=2";
  return (
    <RequestAPIData title="Best of Thriller" endPoint={endPoint}/>
  )
}
export default BestOfThriller;
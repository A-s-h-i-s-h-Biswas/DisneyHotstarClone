import { RequestAPIData } from "../../API/RequestAPIData";

import React from 'react'

const BestOfHorror = () => {
    const endPoint="discover/movie?with_genres=27&with_origin_country=IN&with_original_language=hi&page=2";
  return (
    <RequestAPIData title="Best of Horror" endPoint={endPoint}/>
  )
}
export default BestOfHorror;


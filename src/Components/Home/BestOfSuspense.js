import { RequestAPIData } from "../../API/RequestAPIData";

import React from 'react'

const BestOfSuspense = () => {
    const endPoint="discover/movie?with_genres=53&with_origin_country=IN&with_original_language=hi&page=3";
  return (
    <RequestAPIData title="Best of Suspense" endPoint={endPoint}/>
  )
}
export default BestOfSuspense;
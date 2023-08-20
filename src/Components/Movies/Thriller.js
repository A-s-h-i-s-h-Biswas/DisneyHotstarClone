import React from 'react'
import { RequestAPIData } from '../../API/RequestAPIData'

const Thriller = () => {
    const endPoint="discover/movie?with_genres=53&with_origin_country=IN&with_original_language=hi";
  return (
    <RequestAPIData title='Thriller' endPoint={endPoint}/>
  )
}
export default Thriller;
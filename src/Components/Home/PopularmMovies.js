import { RequestAPIData } from "../../API/RequestAPIData";


const endPoint = "movie/now_playing?with_original_language=hi&with_original_country=IN";

const PopularMovies = () => {
  

  return (
    <RequestAPIData title="Popular Movies" endPoint={endPoint}/>
  );
};
export default PopularMovies;

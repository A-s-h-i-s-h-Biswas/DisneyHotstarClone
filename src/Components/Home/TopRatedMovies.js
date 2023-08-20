import { RequestAPIData } from "../../API/RequestAPIData";

const endPoint = "movie/top_rated?with_original_language=hi&with_original_country=IN&page=2";

const TopRatedMovies = () => {

  return (
    <RequestAPIData title="Top Rated Movies" endPoint={endPoint}/>
  );
};
export default TopRatedMovies;

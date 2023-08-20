import { RequestAPIData } from "../../API/RequestAPIData";

const endPoint = "tv/top_rated";

const TopRatedShows = () => {
  
  return (
    <RequestAPIData title="Top Rated Shows" endPoint={endPoint}/>
  );
};
export default TopRatedShows;

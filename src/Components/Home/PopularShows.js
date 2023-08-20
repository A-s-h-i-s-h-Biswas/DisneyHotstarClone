import { RequestAPIData } from "../../API/RequestAPIData";

const endPoint = "tv/popular?language=hi&page=2";

const PopularShows = () => {
 

  return (
    <RequestAPIData title="Popular Shows" endPoint={endPoint}/>
  );
};
export default PopularShows;

import { RequestAPIData } from "../../API/RequestAPIData";


const endPoint = "movie/upcoming?language=hi&region=IN";

const UpCommingMovies = () => {

  return (
    <RequestAPIData title="New Movies" endPoint={endPoint}/>
  );
};
export default UpCommingMovies;

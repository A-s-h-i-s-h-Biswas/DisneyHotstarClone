import { RequestAPIData } from "../../API/RequestAPIData";


const endPoint = "tv/airing_today?with_original_country=IN";

const UpCommingShows = () => {
  return (
    <RequestAPIData title="New Shows" endPoint={endPoint}/>
  );
};
export default UpCommingShows;

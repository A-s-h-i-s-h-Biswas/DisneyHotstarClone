
export const ImageBase="https://image.tmdb.org/t/p/w500";
export const fallbackImg="https://wipfilms.net/wp-content/uploads/2016/07/No_Poster-1.JPEG";

export const fetchData = async(data) => {
  const baseURL = `https://api.themoviedb.org/3/${data}`;
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  };
   try{
    const response=await fetch(baseURL, options);
    const data=await response.json();
    // console.log(data);
    return data;  
   }
   catch(error){
    // alert(error);
    console.log(error);
   }
};




import { createSlice } from "@reduxjs/toolkit";
// import img from "../Assets/images/slider-badag.jpg";

let initialState = {
  img: "",
  id: null,
  rating: 0,
  type: "movie",
  lang: "Hindi",
  title: "",
  added:false,
  videoId: "",
  releaseDate: "",
  description: "",
};
const detailSlice = createSlice({
  name: "itemDetails",
  initialState,
  reducers: {
    addData(state, action) {
        // console.log(state);
      state = action.payload;
      return state;
    },
    addVideoId(state,action){
      state.videoId=action.payload;
      return state;
    }
  },
});
export const detailSliceAction = detailSlice.actions;
export default detailSlice.reducer;

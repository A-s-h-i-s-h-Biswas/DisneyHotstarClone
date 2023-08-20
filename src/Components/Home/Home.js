import React, { Fragment,Suspense } from 'react';
// import styles from "./Home.module.css";
// import Overlay from '../UI/Overlay';
import Providers from './Providers';
import UpCommingMovies from './UPCommingMovies';
import UpCommingShows from './UpCommingShows';
import PopularMovies from './PopularmMovies';
import PopularShows from './PopularShows';
import TopRatedMovies from './TopRatedMovies';
import TopRatedShows from './TopRatedShows';
import OnAir from './OnAir';
import BestOfHorror from './BestOfHorror';
import Sports from './Sports';
import BestOfThriller from './BestOfThriller';
import BestOfSuspense from './BestOfSuspense';
import BestOfStarWars from './BestOfStarWars';
import NationalGeo from './NationalGeo';
import Pixar from './Pixar';
import Disney from './Disney';
import BestOfKids from './BestOfKids';
const Poster=React.lazy(()=>import('./Poster'));
const img="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/5801/1545801-h-3b482ceb9f83";
const Home = () => {
  return (
    <Fragment>
      <Suspense fallback={<img src={img} alt=''/>}><Poster/></Suspense>
      <Providers/>
      <UpCommingMovies/>
      <UpCommingShows/>
      <PopularMovies/>
      <PopularShows/>
      <TopRatedMovies/>
      <TopRatedShows/>
      <OnAir/>
      <BestOfHorror/>
      <BestOfThriller/>
      <BestOfSuspense/>
      <Sports/>
      <BestOfStarWars/>
      <NationalGeo/>
      <Pixar/>
      <Disney/>
      <BestOfKids/>
    </Fragment>
  )
}
export default Home;

import React, { Fragment,Suspense } from 'react'
import Action from './Action';
import Drama from './Drama';
import Crime from './Crime';
import Family from './Family';
import Comedy from './Comedy';
import Thriller from './Thriller';
import Romance from './Romance';
import Horror from './Horror';
import War from './War';
import SiFi from './SI-FI';
import Mystery from './Mystery';
import Documentary from './Documentary';
import Adventure from './Advanture';
import AnimationMv from './Animation';
import HistoryMv from './History';
import video from "../../Assets/videos/mavka.mp4";
const Banner=React.lazy(()=>import('../UI/Banner'));
const img="https://i.ytimg.com/vi/eszfyg2lSbU/maxresdefault.jpg";
const Movies = () => {
  return (
    <Fragment>
      <Suspense fallback={<img src={img} alt=''/>}><Banner video={video}/></Suspense>
        <Action/>
        <Drama/>
        <Crime/>
        <Family/>
        <Comedy/>
        <Thriller/>
        <Romance/>
        <Horror/>
        <War/>
        <SiFi/>
        <Mystery/>
        <HistoryMv/>
        <Documentary/>
        <Adventure/>
        <AnimationMv/>
    </Fragment>
  )
}
export default Movies;
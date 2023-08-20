import React, { Fragment } from 'react'
import TrendingShows from './TrendingShows'
import Banner from '../UI/Banner'
import video from "../../Assets/videos/Aashiqanahd.mp4";
import DramaShows from './Drama Shows';
import ComedyShows from './ComedyShows';
import CrimeShows from './CrimeShows';
import FamilyShows from './FamilyShows';
import ActionAdvShows from './ActionAdvShows';
import AnimationShows from './AnimationShows';
import KinsShow from './KidsShow';
import DocumentaryShows from './DocumentaryShow';
import FantacyShows from './FantacyShows';
import NewsShows from './NewsShows';
import RealityShows from './RealityShows';
import TalkShows from './TalkShows';
import WarPolShows from './WarPoliticsShows';
import WesternShows from './WesternShows';
export const TVShows = () => {
  return (
    <Fragment>
      <Banner video={video}/>
        <TrendingShows/>
        <DramaShows/>
        <ComedyShows/>
        <CrimeShows/>
        <FamilyShows/>
        <ActionAdvShows/>
        <AnimationShows/>
        <KinsShow/>
        <DocumentaryShows/>
        <FantacyShows/>
        <NewsShows/>
        <RealityShows/>
        <TalkShows/>
        <WarPolShows/>
        <WesternShows/>
    </Fragment>
  )
}

import React from 'react'
import Hero from './Hero'
import WorkingArea from './WorkingArea'
import QualityControl from './QualityControl'
import MissionVision from './MissionVision'
import Dealership from '../Home/Dealership'
import Footer from '../../Shared/Footer'
import Header from '../../Shared/Header'

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <WorkingArea/>
        <QualityControl/>
        <MissionVision/>
        <Dealership/>
        <Footer/>
    </div>
  )
}

export default Home
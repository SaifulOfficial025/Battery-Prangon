import React from 'react'
import Header from '../../Shared/Header'
import Dealership from '../Home/Dealership'
import Footer from '../../Shared/Footer'
import Enquire from '../Home/Enquire'
import ContactInfo from './ContactInfo'

function Home() {
  return (
    <div>
        <Header/>
        <Enquire/>
        <ContactInfo/>
        <Dealership/>
        <Footer/>
    </div>
  )
}

export default Home
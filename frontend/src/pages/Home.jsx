import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Hero1 from '../components/hero/Hero1'
import Footer from '../components/Footer'
import Hero3 from '../components/hero/Hero3'
import Aboutus from '../components/aboutUs/AboutUs'
import Services from '../components/services/Services'

function Home() {
  return (
    <div>
      <Navbar />
      <br />
      <Hero1 />
      <Aboutus />
      <Services />
      <Hero3 />
      <Footer />
    </div>
  )
}

export default Home

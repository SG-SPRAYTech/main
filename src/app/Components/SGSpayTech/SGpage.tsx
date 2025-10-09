import React from 'react'
import Navbar from '../../SGSprayTech/Navbar/Navbar'
import BodyBG from '../Body/BodyBG'
import Services from '../Services/Services'
import Companys from '../Companys/Companys'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'

const SGpage = () => {
  return (
    <div>
        <Navbar/>
        <BodyBG/>
        <Services/>
        <Companys/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default SGpage
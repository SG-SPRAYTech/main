import React from 'react'
import Navbar from './Navbar/Navbar';
import BodyBG from '../Components/Body/BodyBG';
import Services from '../Components/Services/Services';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

const page = () => {
  return (
    <div>
        <Navbar/>
        <BodyBG/>
        <Services/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default page
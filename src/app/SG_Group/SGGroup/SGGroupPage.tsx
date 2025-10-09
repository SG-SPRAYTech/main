import React from 'react'
import Navbar from '../Navbar/Navbar'
import Aboutpage from '../AboutSec/Aboutpage'
import Companys from '../Companys/Companys'
import Footer from '@/app/Components/Footer/Footer'
import Contact from '@/app/Components/Contact/Contact'

const SGGroupPage = () => {
  return (
    <div>
      <Navbar/>
      <Aboutpage/>
      <Companys/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default SGGroupPage
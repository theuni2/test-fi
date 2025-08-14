import React from 'react'
import Hero from '../component/thriveFi/hero'
import Nav from '../component/nav'
import Event from '../component/thriveFi/event'
import Getinvolve from '../component/thriveFi/getinvolved'
import Footer from '../component/thriveFi/footer'
import Slider from '../component/slider'


export default function Page() {
  return (
    <div>
        <Nav/>
        <Slider/>
        <Hero/>
        <Event/>
        <Getinvolve/>
        <Footer/>

    </div>
  )
}

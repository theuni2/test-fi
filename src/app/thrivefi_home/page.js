import React from 'react'
import Hero from '../component/thriveFi/hero'
import Nav from '../component/nav'
import Event from '../component/thriveFi/event'
import Getinvolve from '../component/thriveFi/getinvolved'
import Footer from '../component/thriveFi/footer'
import Slider from '../component/slider'
// import ParallaxCards from '../component/sliderp'
import ThreeCsParallax from '../component/sliderp'
import Sec1 from '../component/sec'
import Marquee from '../component/mar'
// import ParticleSphereCanvas from '../component/ParticleSphereCanvas'


export default function Page() {
  return (
    <div>
        <Nav/>
        <Slider/>
        {/* <Hero/> */}
        <Sec1/>
        {/* <ParticleSphereCanvas/> */}
        <Marquee/>
        <Event/>
        {/* <ParallaxCards/>
         */}
         <ThreeCsParallax/>
        {/* <Getinvolve/> */}
        <Footer/>

    </div>
  )
}

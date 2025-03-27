import React from 'react'
import './AboutUs.css'
import CountUp from 'react-countup'
import {useInView} from 'react-intersection-observer'

const AboutUs = () => {

    const {ref, inView} = useInView({
        triggerOnce: true,
        threshold: 0.3
    })

  return (
    <div className='about-us'>
        <div className="about-us-left">
            <p>We are passionate team of travel enthusiasts dedicated to making your travel dreams come true. <span>Our mission is to provide you with the best travel experience.</span></p>  
        </div>
        <div className="about-us-right" ref={ref}>
            <div className="customers">
                <p>{inView && <CountUp start={1} end={200} duration={3}/>}+</p>
                <span>Happy Customers</span>
            </div>  
            <div className="vertical-line"></div>
            <div className="customers">
                <p>{inView && <CountUp start={1} end={65} duration={4}/>}+</p>
                <span>Top Hotels</span>
            </div>
            <div className="vertical-line"></div>
            <div className="customers">
                <p>{inView && <CountUp start={1} end={250} duration={3}/>}+</p>
                <span>Experienced Guide</span>
            </div>
        </div>
    </div>
  )
}

export default AboutUs
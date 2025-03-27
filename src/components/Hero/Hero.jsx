import React from 'react'
import './Hero.css'
import { CiLocationOn } from "react-icons/ci";
import { FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='hero'>
        <h2>Begin your dream journey with our <br /> expert guidance and support</h2>
        <div className="hero-place">
            <div className="location">
                <CiLocationOn color='white' size={17} />
                <p>Manali</p>
            </div>
            <p className='hero-text'>Book your travel and tranportation service with us <br /> and enjoy a hassel-free and memorable journey</p>
        </div>
        <div className="hero-btn">
            <p>Explore More</p>
            <FaArrowDown size={16} />
        </div>
    </div>
  )
}

export default Hero
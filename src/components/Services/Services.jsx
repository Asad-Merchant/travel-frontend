import React from 'react'
import './Services.css'
import kashmir from '../../assets/kashmir.jpg'
import goa from '../../assets/goa.jpg'
import manali from '../../assets/manali2.jpg'
import { CiLocationOn } from "react-icons/ci";

const Services = () => {
  return (
    <div className='service'>
        <div className="service-title">
            <h1>Explore endless options with our service</h1>
            <p>Discover a myriad of choices available through our services, offering limitless posibilities for <br /> your exploration and enjoyment</p>
        </div>
        <div className="service-flex">
            <div className="service-container">
                <img src={kashmir} alt="" />
                <ul>
                    <li>Flight & Train Bookings</li>
                    <li>Flight & Train Bookings</li>
                </ul>
                <div className="service-location">
                    <CiLocationOn color='white' size={17} />
                    <p>Kashmir</p>
                </div>
            </div>
            <div className="service-container">
                <img src={goa} alt="" />
                <ul>
                    <li>Car Rentals & Transport</li>
                    <li>Visa & Insurance Assistance</li>
                </ul>
                <div className="service-location">
                    <CiLocationOn color='white' size={17} />
                    <p>Goa</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Services
import React from 'react'
import './RegularCard.css'
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt, FaSun, FaMoon } from "react-icons/fa";
import { FaIndianRupeeSign } from "react-icons/fa6";
const RegularCard = ({imageUrl, to, noDay, noNight, currPrice, date}) => {


    const handleDate = (date) => {
        const arr = date.split('-')
        return `${arr[2]}-${arr[1]}-${arr[0]}`
    }

  return (
    <div className='reg-card'>
        <div className="image">
            <img src={imageUrl} alt="" />
            <div className="loc">
                <CiLocationOn />
                <p>{to}</p>
            </div>
        </div>
        <div className="desc">
            <p><CiLocationOn/> Destination: {to}</p>
            <p><FaIndianRupeeSign />Price: {currPrice}/person</p>
            <p><FaCalendarAlt /> Date: {handleDate(date)}</p>
            <p><FaSun/> {noDay} Days <FaMoon/> {noNight} Nights</p>
        </div>
    </div>
  )
}

export default RegularCard
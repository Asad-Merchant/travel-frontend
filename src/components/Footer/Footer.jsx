import React from 'react'
import './Footer.css'
import { RiWhatsappLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-above">
            <div className="col-1">
                <h4>travella.</h4>
                <p>Experience personalized healthcare from the comfort of your home with our advanced services.</p>
                <div className="footer-image">
                    <RiWhatsappLine color='white' size={20} />
                    <IoLogoInstagram color='white' size={20} />
                    <AiOutlineYoutube color='white' size={20} />
                </div>
            </div>
            <div className="col-2">
                <ul>
                    <li>Company</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Contact</li>
                    <li>Career</li>
                </ul>
            </div>
            <div className="col-3">
                <ul>
                    <li>Support</li>
                    <li>FAQs</li>
                    <li>Support Center</li>
                    <li>Security</li>
                </ul>
            </div>
            <div className="col-4">
                <ul>
                    <li>More</li>
                    <li>Events</li>
                    <li>Terms & conditions</li>
                </ul>
            </div>
        </div>
        <hr />
        <div className="footer-below">
            <p>&copy; travella. , 2025 All rigth reserved</p>
        </div>
    </div>
  )
}

export default Footer
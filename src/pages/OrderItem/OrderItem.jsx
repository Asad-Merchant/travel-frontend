import React from 'react'
import './OrderItem.css'
import { useEffect } from 'react'
import { data, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { FaIndianRupeeSign } from "react-icons/fa6";
import { CiLocationOn } from "react-icons/ci";
import { FaCalendarAlt, FaSun, FaMoon } from "react-icons/fa";
import { toast } from 'react-toastify'
import Razorpay from 'razorpay'

const OrderItem = ({setListItem}) => {

    const [userData, setUserData] = useState({
        name: '',
        email: '',
        mobile: '',
        noOfTicketsBooked: ''
    })
    const url = import.meta.env.VITE_BACKEND_URL 
    const key = import.meta.env.VITE_RAZORPAY_KEY_ID
    const location = useLocation()
    const data = location.state?.item 
    const [isOtpSend, setIsOtpSend] = useState(false)
    const [otp, setOtp] = useState('')
    // console.log(data);
    // console.log(userData);
    
    
    const handleChange = (e) => {
        // console.log(e);
        
        const name = e.target.name
        const value = e.target.value 
        setUserData(prev => ({...prev, [name]:value}))
    }

    const loadRazorpayScript = () => {
        return new Promise((resolve) => {
          const script = document.createElement("script");
          script.src = "https://checkout.razorpay.com/v1/checkout.js";
          script.onload = () => resolve(true);
          script.onerror = () => resolve(false);
          document.body.appendChild(script);
        });
      };


    const initiatePayment = async() => {

        const res = await loadRazorpayScript();

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        try {
            console.log('in initiate payment');
            
            const res = await fetch(url+'/api/v1/user/payment', {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({amount: Number(userData.noOfTicketsBooked)*data.currPrice, currency:"INR"})
            })
            const result = await res.json()
            if(result.success){
                console.log(result);
                const options = {
                    key: key,
                    amount: result.msg.amount,
                    currency: result.msg.currency,
                    name: "My E-commerce",
                    description: "Test Transaction",
                    order_id: result.msg.id,
                    handler: async function(response) {
                        console.log(response.razorpay_payment_id, response.razorpay_signature, response.razorpay_order_id);
                        const opt = {
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            razorpay_order_id: response.razorpay_order_id,
                            name: userData.name,
                            email: userData.email,
                            mobile: userData.mobile,
                            noOfTicketsBooked: userData.noOfTicketsBooked,
                            packageId: data._id
                        }
                        const verifyResponse = await fetch(url + "/api/v1/user/verify-payment", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify(opt),
                        });
                        const verifyData = await verifyResponse.json();
                        if(verifyData.success){
                            toast.success(verifyData.msg)
                        } else{
                            toast.error(verifyData.msg)
                        }
                        
                    },
                    prefill: {
                        name: userData.name,
                        email: userData.email,
                        contact: userData.mobile
                    }
                }

                const razor = new window.Razorpay(options);
                razor.open();

            } else{
                toast.error("Some error during payment")
            }
            
        } catch (error) {
            console.log(error);
            
        }
    } 

    const handleOTPClick = async() => {
        const data = {
            email: userData.email,
            otp: otp
        }
        try {
            const res = await fetch(`${url}/api/v1/user/verify-otp`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(data)
            })
            const result = await res.json()
            if(result.success){
                toast.success(result.msg)
                initiatePayment()
            } else{
                toast.error(result.msg)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        if((data.totalTickets - data.ticketsBooked)-userData.noOfTicketsBooked < 0 ){
            toast.error(`Only ${data.totalTickets - data.ticketsBooked} tickets are available`)
            return
        }
        try {
            const res = await fetch(`${url}/api/v1/user/generate-otp`, {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify(userData)
            })
            const result = await res.json()
            if(result.success){
                toast.success(result.msg)
                setIsOtpSend(true)
            } else{
                toast.error(result.msg)
            }
        } catch (error) {
            toast.error(error.message)
            console.log(error);
        }
    }
    console.log(data);
    
    useEffect(()=>{
        setListItem(false)
    }, [])

  return (
    <div className='order-item'>
        <div className="order-item-form">
            {isOtpSend ? 
                <div className="otpCard">
                    <p>Enter Your OTP</p>
                    <div className="otp-input">
                        <input type="text" value={otp} required onChange={(e)=>setOtp(e.target.value)}/>
                    </div>
                    <button onClick={handleOTPClick}>Send OTP</button>
                </div>
            :
                <form onSubmit={handleSubmit}>
                    <div className="item">
                        <p>Full Name: </p>
                        <input value={userData.name} name='name' type="text" required onChange={handleChange}/>
                    </div>
                    <div className="item">
                        <div className="item-flex">
                            <p>Email: </p>
                            <input value={userData.email} name='email' type="email" required onChange={handleChange}/>
                        </div>
                        <div className="item-flex-2">
                            <p>Mobile No.: </p>
                            <input value={userData.mobile} name='mobile' type="tel" pattern='[0-9]{10}' required onChange={handleChange}/>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-flex">
                            <p>No. of tickets: </p>
                            <input value={userData.noOfTicketsBooked} name='noOfTicketsBooked' type="number" min={1} max={data.totalTickets - data.ticketsBooked} required onChange={handleChange}/>
                        </div>
                    </div>
                    <span>Total Amount: <FaIndianRupeeSign size={10} />{Number(userData.noOfTicketsBooked)*data.currPrice}</span>
                    <button type='submit'>Proceed to pay</button>
                </form>
            }
        </div>
        <div className="order-item-detail">
            <img src={data.imageUrl} alt="" />
            <p><CiLocationOn /> Destination: {data.to}</p>
            <p><FaIndianRupeeSign /> Price: {data.currPrice}</p>
            <p><FaCalendarAlt /> Date: {data.date}</p>
            <p><FaSun /> No. of days: {data.noDay}</p>
            <p><FaMoon /> No. of nights: {data.noNight}</p>
            <p>Available Tickets: {data.totalTickets - data.ticketsBooked}</p>
        </div>
    </div>
  )
}

export default OrderItem
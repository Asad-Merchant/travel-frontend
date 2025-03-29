import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import successAnimation from '../../assets/Animation - 1743139199675.json'
import Lottie from 'lottie-react'
import "./PaymentSuccess.css"
import { toast } from 'react-toastify'

const PaymentSuccess = ({setListItem}) => {

    const navigate = useNavigate()
    const [orderId, setOrderId] = useState()
    const location = useLocation();

    useEffect(() => {
        if(!location.state?.orderId){
            toast.error("Not allowed.")
            navigate('/')
            return
        }
        setOrderId(location.state.orderId)
        setListItem(false)
    }, [])

    

    return (
        <div className='pay-success'>
            <Lottie animationData={successAnimation} loop={true} style={{ width: 400, height: 400 }} />
            <h2>Payment Successful 🎉</h2>
            <p>You will receive an email with the tickets you have booked. Make sure to carry that email with you.</p>
            <p>Your Order ID: {orderId}</p>
            <p>Navigate to home page. <span onClick={() => navigate('/')}>Click here</span> </p>
        </div>
    );
}

export default PaymentSuccess
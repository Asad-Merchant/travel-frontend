import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import successAnimation from '../../assets/Animation - 1743139199675.json'
import Lottie from 'lottie-react'
import "./PaymentSuccess.css"

const PaymentSuccess = ({setListItem}) => {

    const navigate = useNavigate()

    useEffect(() => {
        setListItem(false)
    }, [])

    const location = useLocation();

    return (
        <div className='pay-success'>
            <Lottie animationData={successAnimation} loop={true} style={{ width: 400, height: 400 }} />
            <h2>Payment Successful 🎉</h2>
            <p>You will receive an email with the tickets you have booked. Make sure to carry that email with you.</p>
            <p>Your Order ID: {location.state?.orderId}</p>
            <p>Navigate to home page. <span onClick={() => navigate('/')}>Click here</span> </p>
        </div>
    );
}

export default PaymentSuccess
import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import failureAnimation from '../../assets/Animation - 1743139931344.json'
import Lottie from 'lottie-react'
import './PaymentFailure.css'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const PaymentFailure = ({setListItem}) => {

    const navigate = useNavigate()
    const location = useLocation();

    useEffect(() => {
        if(!location.state?.orderId){
            toast.error("Not allowed.")
            navigate('/')
            return
        }
        setListItem(false)
    }, [])

  return (
    <div className='pay-failure'>
        <Lottie animationData={failureAnimation} loop={true} style={{ width: 300, height: 300 }} />
        <h2>Payment Failed ❌</h2>
        <p>Oops! Something went wrong with your transaction.</p>
        <p>Please try again or contact support if the issue persists.</p>
        <p>Navigate to home page. <span onClick={() => navigate('/')}>Click here</span> </p>
    </div>
  )
}

export default PaymentFailure
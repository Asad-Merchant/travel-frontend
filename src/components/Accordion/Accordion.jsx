import React, { useState } from 'react'
import './Accordion.css'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const Accordion = () => {

    const [selectedIndex, setSelectedIndex] = useState(-1)
    const qAndA = [
        {
            question: "How do I book a trip with your travel service?",
            asnwer: "You can book a trip by calling our customer service hotline, or by visiting our office."
        },
        {
            question: "What payment methods do you accept?",
            asnwer: "We accept credit/debit cards, UPI, net banking, and digital wallets. Secure payment options ensure a hassle-free booking experience."
        },
        {
            question: "Do you offer group travel packages?",
            asnwer: "Yes, we offer customized group travel packages for families and friends."
        },
        {
            question: " Can I modify or cancel my booking?",
            asnwer: "Yes, modifications and cancellations are allowed as per our policy. Please contact our support team for assistance."
        }
    ]

    const handleClick = (idx) => {
        console.log(idx);
        
        if(idx===selectedIndex)
            setSelectedIndex(-1)
        else
            setSelectedIndex(idx)
    }

  return (
    <div className='accordion'>
        <div className="accordion-left">
            <h1>Frequently Asked Questions</h1>
            <p>We believe in the power of collective action to address the urgent environmental challenges facing our planet.</p>
        </div>
        <div className="accordion-right">
            {
                qAndA.map((item, idx) => {
                    return <div className='accordion-item' key={idx} onClick={() => handleClick(idx)}>
                        <div className="question">
                            <h4>{item.question}</h4>
                            { selectedIndex===idx? <IoIosArrowUp/>: <IoIosArrowDown /> }
                        </div>
                        <div className="answer">
                            <p className={`${selectedIndex===idx?'active':'inactive'}`} >{item.asnwer}</p>
                        </div>
                    </div>
                })
            }
        </div>
    </div>
  )
}

export default Accordion
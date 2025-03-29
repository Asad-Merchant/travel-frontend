import React, {useState, useEffect} from 'react'
import AboutUs from '../../components/AboutUs/AboutUs'
import Services from '../../components/Services/Services'
import Accordion from '../../components/Accordion/Accordion'
import Hero from '../../components/Hero/Hero'
import RegularCard from '../../components/RegularCard/RegularCard'
import './Home.css'
import { useNavigate } from 'react-router-dom'

const Home = ({setListItem}) => {

    const navigate = useNavigate()
    const [cardData, setCardData] = useState([])
    const fetchData = async() => {
        try {
            const res = await fetch(import.meta.env.VITE_BACKEND_URL+'/api/v1/package/list-all')
            const result = await res.json()
            if(result.success){
                setCardData(result.msg)
            } else{
                console.log(result.msg);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = (item) => {
        localStorage.setItem('packageId', item._id)
        navigate('/order')
        window.scrollTo(0,0)
    }

    useEffect(() => {
        setListItem(true)
        fetchData()
        localStorage.removeItem('packageId')
    }, [])

    // console.log(cardData);
    

  return (
    <div>
        <Hero />
        <div className="app">
            <AboutUs />
            <Services />
            <h2>Upcoming Journeys</h2>
            <div className="cards">
              {
                cardData && cardData.length>0 && cardData.map((item, idx) => {
                    return <div onClick={() => handleClick(item)}>
                        <RegularCard key={idx} imageUrl={item.imageUrl} to={item.to} noDay={item.noDay} noNight={item.noNight} currPrice={item.currPrice} date={item.date} />
                    </div>
                })
              }
            </div>
            <Accordion />
        </div>
    </div>
  )
}

export default Home
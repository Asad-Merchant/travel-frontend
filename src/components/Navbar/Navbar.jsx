import React, { useEffect, useState } from 'react'
import './Navbar.css'

const Navbar = ({listItem}) => {

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(()=>{
        console.log('in useeffect');
        
        const handleScroll = () => {
            if(window.scrollY>50){
                // console.log(isScrolled);
                setIsScrolled(true)
            } else{
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return ()=> window.removeEventListener('scroll', handleScroll)

    }, [])


  return (
      <div className={`${listItem ? 'navbar' : 'navbar scrolled'} ${isScrolled ? 'scrolled' : ''}`}
>
          <div className="navbar-title">
              travella.
          </div>
          <div>
              {
                listItem ?
                <ul className="navbar-list">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                    <li>Travel Packages</li>
                </ul>
                :
                    ""
              }
          </div>
      </div>
  )
}

export default Navbar
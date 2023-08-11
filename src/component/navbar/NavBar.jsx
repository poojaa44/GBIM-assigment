import React from 'react'
import './navbar.css';


const NavBar = () => {

  const imgUrl = "https://thefuturetech.in/whatsapp-marketing-software/wp-content/uploads/2023/03/tft-1.png"
  return (
    <>
    <div className='container' >
      <div className="navbar"  >

        <div className='navbar_logo' >
        <img src={imgUrl} style={{width:'150px', height:"100px"}} alt="" />
        </div>
        <div className="navbar_links">
          <p><a href="#">Whatsapp Software</a></p>
          <p><a href="#">Google Data Extractor</a></p>
          <p><a href="#">Justdial Extractor</a></p>
        </div>
        <div className='navbar_buttons'>
          <p><a href="#">Lets Speak</a></p>
          <span><button><i className='fa fa-phone-alt' ></i> +91 91064 76439</button></span>
        </div>
      </div>
    </div>
    </>
  )
}

export default NavBar
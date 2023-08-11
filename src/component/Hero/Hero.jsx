import React from 'react'
import './hero.css'


const Hero = () => {
    const imgUrl ='https://thefuturetech.in/whatsapp-marketing-software/wp-content/uploads/2023/02/Whatsapp.png'
  return (
    <div>
       <div className='hero' >
            <div className="hero_content">
                <h1>WORLD’S BEST MARKETING SOFTWARE</h1>
                <div className='hero_content_para' >
                    <p>WhatsApp + Business = More Business</p>
                    <p>Our mission is to automate the process of sending WhatsApp messages in a effective way.</p>
                    <p>68% of WhatsApp users think, Whatsapp is the easiest way to connect with businesses. Now Send whatsapp messages directly from PC in a simple and effective way.</p>
                </div>
                <div className="hero_buttons">
                    <button>Buy Now</button>
                    <button>Enquire Now</button>
                </div>
            </div>

            <div className='hero_img'>
                <img src={imgUrl} alt="" />
            </div>
       </div>
    </div>
  )
}

export default Hero
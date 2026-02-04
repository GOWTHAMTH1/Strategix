import {NavLink} from 'react-router-dom'
import '../components/Footer.css'

import { FaXTwitter ,FaFacebookF ,FaLinkedinIn ,} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-navigation">
          <p>At our Creative Digital Agency, we bring your ideas to life by crafting engaging, impactful digital experiences that captivate audiences and drive results. From innovative web design to compelling content and cutting-edge digital strategies.</p>
          <div className="navigation">
              <div className="links">
                <NavLink to='/'>HOME</NavLink>
                <NavLink to='meta_ads'>META ADS</NavLink>
                <NavLink to='/'>SDM</NavLink>
                <NavLink to='google_ads'>GOOGLE ADS</NavLink>
                <NavLink to='/'>PRIVACY POLICY</NavLink>
                <NavLink to='/'>TERMS OF SERVICE</NavLink>
                <NavLink to='contact'>CONTACT</NavLink>
              </div>
              <div className="Icons-container">
                <a href="https://x.com/twitt_login?lang=en"><FaXTwitter className='icons'/></a>
                <a href="https://www.facebook.com/"><FaFacebookF className='icons'/></a>
                <a href="https://www.linkedin.com/login"><FaLinkedinIn className='icons'/></a>
            </div>
            </div>
           
        </div> 

        <div className="copywright">
              <p>copyright@ 2026 STRATEGIX. All rights reserved</p>
              <div className="logoName">
                <span className='span1'>STRATEGIX </span><span>DIGITAL MEDIA</span>
                   
              </div>
        </div>
           
    </div>
  )
}

export default Footer
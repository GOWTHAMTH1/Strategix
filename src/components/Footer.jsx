import {NavLink} from 'react-router-dom'
import '../components/Footer.css'

import { FaXTwitter ,FaFacebookF ,FaLinkedinIn ,} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-navigation">
          <p> At our creative digital agency Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam deleniti hic, impedit aperiam odio dignissimos tenetur? Hic, deserunt itaque repellendus repellat at fuga! Accusamus, fugiat id, temporibus amet accusantium voluptatibus quidem qu
              od vel iure quo eligendi est a quisquam eaque porro omnis deleniti autem corrupti aperiam, ad nesciunt alias.</p>
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
                 <FaXTwitter className='icons'/>
                 <FaFacebookF className='icons'/>
                 <FaLinkedinIn className='icons'/>
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
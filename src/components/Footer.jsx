import {NavLink} from 'react-router-dom'
import '../components/Footer.css'
const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-navigation">
          <p> At our creative digital agency Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus nam deleniti hic, impedit aperiam odio dignissimos tenetur? Hic, deserunt itaque repellendus repellat at fuga! Accusamus, fugiat id, temporibus amet accusantium voluptatibus quidem qu
            od vel iure quo eligendi est a quisquam eaque porro omnis deleniti autem corrupti aperiam, ad nesciunt alias.</p>
        <div className="navigation">
            <NavLink to='/'>HOME</NavLink>
            <NavLink to='meta_ads'>META ADS</NavLink>
            <NavLink to='/'>SDM</NavLink>
            <NavLink to='google_ads'>GOOGLE ADS</NavLink>
            <NavLink to='/'>PRIVACY POLICY</NavLink>
            <NavLink to='/'>TERMS OF SERVICE</NavLink>
            <NavLink to='contact'>CONTACT</NavLink>
        </div>
        <div className="copywright">
            <p>copyright@ 2026 STRATEGIX. All rights reserved</p>
            <div className="logoName">
                STRATEGIX DIGITAL MEDIA
            </div>
        </div>
        </div>
       
    </div>
  )
}

export default Footer
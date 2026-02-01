import {NavLink} from 'react-router-dom'
import './Navbar.css'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  return (
  <>
  <div className="container">
    <div className="nav-container">
        <div className='logo_container' >
          <img src={logo} alt="" className='logo' />
          <div className="logo_name">
            <div>STRATEGIX</div>
            <h6>DIGITAL MEDIA</h6>
          </div> 
        </div>

        <ul className='ul-container' >
            <NavLink to='/'>Home</NavLink>
            <NavLink to='meta_ads'>Meta Ads</NavLink>
            <NavLink to='google_ads'>Google Ads</NavLink>
            <NavLink to='contact'>Contact</NavLink>
        </ul>
    </div>
    </div>
   </>
  )
}

export default Navbar
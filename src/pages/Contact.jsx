import '../Global.css'
import Hero from '../components/Hero'
import { useEffect, useState } from 'react'
import logo from '../assets/logo2.png'
import { useLocation } from 'react-router-dom'
const Contact = () => {
      const [FormData,SetFormData]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
        CountryCode:"",
        PhoneNumber:"",
        Message:""
      })
      const HandleChange=(e)=>{
            const name=e.target.name
            const value=e.target.value
            SetFormData({
              ...FormData,[name]:value
              
            })
            console.log([name],value);
      }
      const HandleSubmit=(e)=>{
            alert(
              
              `Thank you for Contact us
              FirstName:${FormData.FirstName}
              LastName:${FormData.LastName}
              Email:${FormData.Email}
              CountryCode:${FormData.CountryCode}
              PhoneNumber:${FormData.PhoneNumber}
              Message:${FormData.Message}`
                ) 
        e.target.preventDefault()      
              }
             const location= useLocation()

             useEffect(()=>{
              if (location.hash){
                const element=document.querySelector(location.hash)
                element?.scrollIntoView({behavior:"smooth"})
              }
             },[location])
  return (
    <div className="contact" id='contact' >
      <Hero title="CONTACT US"/>
      <div className="contact-details">
        <div className="getinTouch">
          <div className='LogoImg'>
            <img src={logo} alt="logo" />
            <div className="logoName">
              <div>STRATEGIX</div>
              <h6>DIGITAL MEDIA</h6>
            </div>
          </div>
          <div className="getinTouch-text" >
              Get in touch with <br /> <span >STRATEGIX</span>
          </div>
        </div>
        <div className="form"  >
        <form action="" onSubmit={HandleSubmit} >
          <div className='InfoField'>
            <label htmlFor="FirstName">First Name</label>
            <input type="text" value={FormData.FirstName} onChange={HandleChange} required name='FirstName' placeholder="Enter First Name" />
          </div>

          <div className='InfoField'>
            <label htmlFor="LastName">Last Name</label>
            <input type="text"  value={FormData.LastName} onChange={HandleChange} required name='LastName' placeholder="Enter Last Name" />
          </div>

          <div className='InfoField'>
            <label htmlFor="Email">Enter Email</label>
            <input type="email"  value={FormData.Email}  onChange={HandleChange} required name='Email' placeholder="Enter Email" />
          </div>

          <div className='InfoField' >
          <label htmlFor="PhoneNumber">Enter Phone Number</label> <br />
            <select name="CountryCode" onChange={HandleChange}  value={FormData.CountryCode} id="">
              <option value="us">US</option>
              <option value="ind">IND</option>
              <option value="sa">SA</option>
            </select>
            <input type="tel"  value={FormData.PhoneNumber}  onChange={HandleChange} required name='PhoneNumber' placeholder="Enter Phone Number" />
          </div>

          <div className='InfoField'>
            <label htmlFor="Message">Message</label>
            <textarea name="Message"  value={FormData.Message}  onChange={HandleChange} required id="" cols="30" rows="10">Enter Your Message</textarea>
          </div>

           <div className='InfoField'>
                <button type='submit' className='btn' >Send</button>
           </div>
        </form>
        </div>
        <div className="LetsWorkTogether">
          <h1>LET'S <br /> WORK  TOGETHER</h1>
        </div>
      </div>
    </div>
  )
}

export default Contact
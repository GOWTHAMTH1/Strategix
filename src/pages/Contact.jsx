import '../Global.css'
import Hero from '../components/Hero'
import { useState } from 'react'
const Contact = () => {
      const [FormData,SetFormData]=useState({
        FirstName:"",
        LastName:"",
        Email:"",
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
            e.target.preventDefault()
            console.log(formData);
      }
  return (
    <div className="contact">
      <div className="contact-details">
      <Hero title="CONTACT US"/>
      <div className="getinTouch">
        <div>
          logo
        </div>
        <div className="getinTouch-text" >
            Get in touch with <br /> <span >STRATEGIX</span>
        </div>
      </div>
      <div className="form" onSubmit={HandleSubmit}>
        <form action="" >
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
            <select name="PhoneNumber" id="">
              <option value="us">US</option>
              <option value="ind">IND</option>
              <option value="sa">SA</option>
            </select>
            <input type="Number"  value={FormData.PhoneNumber}  onChange={HandleChange} required name='PhoneNumber' placeholder="Enter Phone Number" />
          </div>

          <div className='InfoField'>
            <label htmlFor="Message">Message</label>
            <textarea name="Message"  value={FormData.Message}  onChange={HandleChange} required id="" cols="30" rows="10">Enter Your Message</textarea>
          </div>

           <div className='InfoField'>
                <button type='submit' >Send</button>
           </div>
        </form>
      </div>
      <div className="LetsWorkTogether">
        <div>LET'S <br /> WORK  TOGETHER</div>
      </div>
    </div>
    </div>
  )
}

export default Contact
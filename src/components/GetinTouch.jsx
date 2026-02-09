import '../Global.css'
import { MdArrowOutward } from "react-icons/md";
import {useNavigate} from 'react-router-dom'
import { FaStarOfLife } from "react-icons/fa";

const GetinTouch = ({GetinTouchData}) => {
          const navigate=useNavigate()
  return (
    <div className='GetinTouch-Container' >
        <div className="GetinTouch">
            <div className="highlights">
              <p> <FaStarOfLife className='staricon'  /> {GetinTouchData.subheading}</p>
              <h1>{GetinTouchData.heading}</h1>
              <div className="Booking">
                <p>{GetinTouchData.description}</p>
                <button className="BookingBtn btn" >{GetinTouchData.buttonName}</button>
              </div>
            </div>
            <div className="GetinTouchBtn btn" onClick={()=>navigate("/contact#contact")}>
              <div> <MdArrowOutward/> Get In Touch  </div>
            </div>
        </div>
    </div>
  )
}

export default GetinTouch
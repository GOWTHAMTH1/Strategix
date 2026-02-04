import '../Global.css'
import { MdArrowOutward } from "react-icons/md";

const GetinTouch = ({GetinTouchData}) => {
  return (
    <div className='GetinTouch-Container' >
        <div className="GetinTouch">
            <div className="highlights">
              <p>{GetinTouchData.subheading}</p>
              <h1>{GetinTouchData.heading}</h1>
              <div className="Booking">
                <p>{GetinTouchData.description}</p>
                <button className="BookingBtn btn" >{GetinTouchData.buttonName}</button>
              </div>
            </div>
            <div className="GetinTouchBtn btn">
              <div> <MdArrowOutward/> Get In Touch  </div>
            </div>
        </div>
    </div>
  )
}

export default GetinTouch
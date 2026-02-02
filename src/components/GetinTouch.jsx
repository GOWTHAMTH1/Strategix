import '../Global.css'
import { MdArrowOutward } from "react-icons/md";

const GetinTouch = ({subtitle,heading,description,btnName}) => {
  return (
    <div>
        <div className="GetinTouch">
            <div className="highlights">
              <p>{subtitle}</p>
              <h1>{heading}</h1>
              <div className="Booking">
                <p>{description}</p>
                <button className="BookingBtn" >{btnName}</button>
              </div>
            </div>
            <div className="GetinTouchBtn">
              <div> <MdArrowOutward/>  Get in Touch</div>
            </div>
        </div>
    </div>
  )
}

export default GetinTouch
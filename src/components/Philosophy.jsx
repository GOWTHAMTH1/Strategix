import teamwork1 from '../assets/teamwork1.jpg'
import teamwork2 from '../assets/teamwork2.jpg'
import teamwork3 from '../assets/teamwork3.jpg'


const Philosophy = () => {
   
    const reasons=["Actively collaborate with",
    "Are open to data driven decisions",
    "Remain flexible during testing","trust the long term process"]

  return (
        <div className="philosophy-container section">
            <div className="philosophy content">
                <h3 className="heading">OUR PHILOSOPHY : PARTNERSHIP FIRST</h3>
                <p>At Strategix Digital, we work collaboratively with our clients to ensure transparent goals, continuous improvement, and results that truly matter.</p>
            </div>
            <div className="img img1">
                <img src={teamwork1} alt="group of people image 1" />
            </div>
            <div className="img img2">
                <img src={teamwork2} alt="group of people image 2" />
            </div>    
            <div className="img img3">
                <img src={teamwork3} alt="group of people image 3" />
            </div>    
                
           <div className="reason content">
            <ul >
                For the reason, we work with best clients,
               {reasons.map((reason,index)=>(<li key={index} >{reason}</li>))}
            </ul>
           </div>
        </div>
  )
}

export default Philosophy
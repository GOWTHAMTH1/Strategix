import teamwork1 from '../assets/teamwork (1).jpg'
import teamwork2 from '../assets/teamwork (2).jpg'
import teamwork3 from '../assets/teamwork (3).jpg'


const Philosophy = ({title,subtitle,subtitle2}) => {
   
    const reasons=["Actively collaborate with",
    "Are open to data driven decisions",
    "Remain flexible during testing","trust the long term process"]

  return (
        <div className="philosophy-container section">
            <div className="philosophy content">
                <div className="heading">{title}</div>
                <p>{subtitle}</p>
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
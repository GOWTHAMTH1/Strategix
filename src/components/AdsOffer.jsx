import { FaStarOfLife } from "react-icons/fa";
const AdsOffer = ({ads}) => {
  return (
    <div className="Adsoffer-container">
        <div className="Adsoffer">
            <div className="content">
                <h1> <FaStarOfLife className='staricon' />  {ads.title}</h1>
                <ul>{ads.ulhead1}  {ads.features1.map((content,index)=>( <li key={index}>{content}</li> ))}</ul> 
               <ul>{ads.ulhead2} {ads.features2.map((content,index)=>( <li key={index}>{content}</li> ))} </ul>
            </div>
            <div className="img">
                <img src={ads.img} alt="Ads offer" />
            </div>
        </div>
    </div>
  )
}

export default AdsOffer
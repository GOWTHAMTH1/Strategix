import aiearth from '../assets/aearth.jpg'
import { FaStarOfLife } from "react-icons/fa";
import { IoColorFilterOutline } from "react-icons/io5";
import { HiOutlineSquare2Stack } from "react-icons/hi2"
import { IoIosColorPalette } from "react-icons/io";
import { LuScanFace } from "react-icons/lu";

const Services = () => {
    const specializedIn=[
        "Meta ads",
        "Google ads",
        "B2B and B2C bussiness",
        "We never force bussiness onto every platform",
        "we support analyze and reccommend only what truly works"
    ]
    const features=[
        {
        id:"1",
        icon:IoColorFilterOutline,
        title:"Lead intent",
        description:"We target audiences actively searching for your products or services."
    },
        {
        id:"2",
        icon:HiOutlineSquare2Stack,
        title:"Lead relevance",
        description:"Campaigns are optimized to attract the right audience, not just more leads."
    },
        {
        id:"3",
        icon:IoIosColorPalette,
        title:"Conversion Potential",
        description:"Ads are designed to drive meaningful actions and real business results."
    },
        {
        id:"4",
        icon:LuScanFace,
        title:"Long-term Scalability",
        description:"Strategies are built for sustainable growth over time."
    }
]

  return (
    <div className="services section">
        <div className="aiearthImg" >
            <img src={aiearth} alt="ai earth" />
        </div>
        <div className="content">
            <section >
                <p> <FaStarOfLife className='staricon'/> What we do,</p>
                <h1 >Your trusted partner for <span style={{color:"blue"}} >DIGITAL SUCCESS</span></h1>
                <p>We deliver customized digital marketing solutions backed by AI and performance-driven strategies.</p>
                <div className="specifications" >
                    <ul>
                    <FaStarOfLife className='staricon'/> We Specialize in
                        {specializedIn.map((specials,index)=>(<li key={index}>{specials}</li> ))}
                    </ul>
                </div>
            </section>
       </div>
       <div className="servies-2">
        <div className="heading">
            <h4>Quality Over Quantity -Always</h4>
        </div>
        <div className="features">
            {features.map((item)=>{
                const Icon=item.icon
                return (<li key={item.id}>
                        <div className='iconDiv' >
                            <Icon className="icon"/>
                        </div>
                        <div className='desc' >
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                            <hr />
                        </div>     
            </li>
            )})}
        </div>
       </div>
    </div>
  )
}

export default Services
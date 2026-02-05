//---------StyleSheet----------
import '../Pages.css'
/*************----------Components------------***********/
import Hero from '../components/Hero'
import Quality from '../components/Quality'
import GetinTouch from '../components/GetinTouch'
import Section1 from '../components/Section1'

/*************----------Images------------****************/
import invention from '../assets/invention.jpg'
import grow from '../assets/growth6.jpg'
import teamwork6 from '../assets/teamwork6.jpg'
import teamwork1 from '../assets/teamwork1.jpg'
import teamwork2 from '../assets/teamwork2.jpg'
import teamwork3 from '../assets/teamwork3.jpg'
import aiearth from '../assets/aearth.jpg'

/*************----------Icons------------***********/
import { FaStarOfLife } from "react-icons/fa";
import { IoColorFilterOutline } from "react-icons/io5";
import { HiOutlineSquare2Stack } from "react-icons/hi2"
import { IoIosColorPalette } from "react-icons/io";
import { LuScanFace } from "react-icons/lu";


const Home = () => {
   const reasons=["Actively collaborate with",
    "Are open to data driven decisions",
    "Remain flexible during testing","trust the long term process"]

const QualityData={
  heading:"Why We're Not a Regular Agency",
  heading1:"We are not built for",
  Qlist_1:["Short-term thinking","Rigid expectations during testing","Hit-and-run campaigns"],
  heading2:"We Believe",
  Qlist_2:["Business owners' knowledge matters","Collaboration drives better decisions",
            "Flexibility leads to stronger outcomes Long-term commitment creates real value"]
}
//-----------Services---------------------
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
  //-----------Get in Touch Data------------
  const GetinTouchData={
    subheading:"Let's build perfomance-the rightway",
    heading:"Ready to Build Meta Ads That Actually Convert?",
    description:"If you are serious about quality leads, scalable results, and long-term growth,we are ready to work with you",
    buttonName:"Book a Call"
  }
  const MainSection={
    "inventionImg":invention,"growthImg":grow,"teamworkImg":teamwork6
  }
  console.log(MainSection.teamworkImg);
  
  const MiniSectionData={
    heading:"Our Process of Digital Marketing",
    subheading:"Our digital marketing process is built to ensure consistent and scalable growth. We focus on research, execution, optimization, and long-term"
  }
  const Section1Data={
    heading:"Our digital marketing process is built to ensure consistent and scalable growth. We focus on research, execution, optimization, and long-term"
  ,description:"Before launching campaigns, we invest time to fully understand your business."
  ,ulHead1:"This includes ",ulHead2:"This phase requires patience and flexibility"
  }
  const Section2Data={
    heading:"Growth & Optimization Phase (Month 1)"
  ,description:"The first month is treated as a growth and learning statge"
  ,ulHead1:"During this phase ",ulHead2:""
  }
  const Section3Data={
    heading:"Scaling & Long-Term Growth"
  ,description:"This phase focuses on sustainable results."
  ,ulHead1:"Includes: ",ulHead2:""
  }
        const research=[
"Brand and product understanding",
"Audience research and intent analysis",
"Funnel structure and creatives",
"Competitive analysis"]
        const research2=[
"Acurate Targeting",
"Higher quality leads",
"More predictable results"]

        const growth=[
          "Test multiple creatives and audiences",
        "Apply AI Driven Optimization",
      "Use structured trial and error",
    "Continnues refign compaigns"]

    const Scaling=[ "campaigns responsibly",
"Cross-platform expansion",
"Long-term performance optimization",
"Consistent growth monitoring"]

  return (
    <div className="home" >
      <Hero title="Customizable Digital Marketing
Services with AI"
          subtitle="We Help Businesses Grow Through Data-Driven, Al-Powered Digital Marketing, Focused On Quality Leads, Strategic Alignment, And Long-Term Performance Not Short-Term Hype."
       />
      <div className="philosophy-container ">
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
      <Quality QualityData={QualityData} />
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
      <GetinTouch GetinTouchData={GetinTouchData} />
      <Section1 
      MainSection={MainSection}  MiniSectionData={MiniSectionData} Section1Data={Section1Data} Section2Data={Section2Data} Section3Data={Section3Data}
      research={research} research2={research2} Scaling={Scaling} growth={growth}  />
    </div>
  )
}

export default Home
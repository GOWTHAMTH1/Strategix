import GetinTouch from "../components/GetinTouch"
import Hero from "../components/Hero"
import Section1 from "../components/Section1"
import invention from '../assets/invention.jpg'
import grow from '../assets/growth6.jpg'
import teamwork4 from '../assets/teamwork5.jpg'
import Quality from "../components/Quality"
import AdsOffer from "../components/AdsOffer"
import adsImg from '../assets/istockpic.jpg'
import teamwork1 from '../assets/teamwork1.jpeg'
import grp1 from '../assets/grp1.webp'
import revenueGrowthImg from '../assets/revenue.jpg'
import ads2 from '../assets/ads2.jpg'
import { FaStarOfLife } from "react-icons/fa";


const GoogleAds = () => {

   const GetinTouchData={
    subheading:"Let's turn intent into revenue-The right way",
    heading:"Ready to use Google Ads the Right Way?",
    description:"If you are serious about quality leads, strategix execution, and long-term growth,we are ready to work with you",
    buttonName:"Book a Google Ads"
  }
   const MainSection={
      "inventionImg":invention,"growthImg":grow,"teamworkImg":teamwork4
    }
  const MiniSectionData={
    heading:"Our Google Ads Strategy",
    subheading:"Our digital marketing process begins with discovery and research to understand your goals. We then develop a tailored strategy and implement campaigns across various channels. Continuous monitoring and optimization ensure effectiveness, followed by regular reporting to track performance. Finally, we refine and scale efforts for sustained growth and success."
  }
  const Section1Data={
    heading:"Research & Development First (Week 1)"
  ,description:"Before launching ads, we invest 1 full week in understanding your business."
  ,ulHead1:"This includes ",ulHead2:"This phase requires patience and flexibility"
  }
  const Section2Data={
    heading:"Growth & Optimization Phase (Month 1)"
  ,description:"The first month is treated as a growth and learning statge"
  ,ulHead1:"During this phase ",ulHead2:""
  }
  const Section3Data={
    heading:"Scaling with Control"
  ,description:"Once data confirms consistency"
  ,ulHead1:"Includes: ",ulHead2:""
  }
        const research=[
"Keyword intent & search behavior analysis",
"Competitor ad strategy review",
"Funnel & landing page alignment",
"Budget efficiency planning","Platform suitability validation"]

        const research2=[
"Higher lead accuracy",
"Better Quality Scores",
"Lower cost per quality lead"]

        const growth=[
          "Test multiple keyword clusters",
        "Refine ad copy and extensions",
      "Filter low-intent searches",
    "Continnues refign compaigns","Improve conversion tracking"]
  
        const Scaling=[ "Budgets are scaled responsibly",
"Winning keywords are prioritized",
"Cost efficiency improves",
"Lead quality becomes predictable"]

 const QualityData={
    heading:"Quality Over Quantity - Always",
    heading1:"Most agencies report",
    Qlist_1:["Clicks","Impressions","Traffic"],
    heading2:"We focus on",
    Qlist_2:["Lead intent","Conversion accuracy","Business relevance","ROI sustainability"]
  }
  const ads={
     title:"What We Offer in Google Ads",
     ulhead1:"Google Ads Services We Specialize In",
     features1:["Google Search Ads","Google Display Ads","YouTube Ads","Remarketing & Retargeting","Conversion Tracking & Analytics setup"
],
     ulhead2:"Our strategies",
     features2:["Highlighting ROI and Expertise","Campaign structure","High Intent and Long Tail"],
     img:adsImg
   }
  const gAdsWorks={
    FeatureList1:["Business owners know their industry best","Strategy works best through collaboration","Flexibility during testing leads to better results","Long-term partnerships create meaningful growth"],
    FeatureList2:["Short-term, hit-and-run advertisers",
"Clients expecting instant guaranteed leads",
"Businesses unwilling to test or adapt"],
    FeatureList3:["High-intent service businesses",
"B2B lead generation companies",
"eCommerce with clear margins",
"Brands ready for long-term scaling"]
  }

  return (
    <div className="fragment" >
      <Hero title="AI Google Ads Management"
      subtitle="We Use Al-Powered Analysis, Deep Research, And Structured Optimization To Ensure Every Rupee Spent Works Toward Real Business Growth."
      />
      <div className="gAdsHero">
        <div className="gHeroImg1">
          <img src={teamwork1} alt="teamwork1" />
        </div>
        <div className="gAdHeroContent">
          <h1>Why <span style={{color:"blue"}} >Google Ads</span> Matters <br /> (When Done Right)</h1>
          <p>Google Ads is powerful because it captures intent - people actively searching for your product or service.</p>
          <div className="gList">
            <ul>
                <FaStarOfLife className='staricon'  /> But without strategy
              <li>Budgets get wasted</li>
              <li>Leads don't convert</li>
              <li>Costs increase over time</li>
            </ul>
            <p>We fix that by building Google Ads systems, not random campaigns.</p>
          </div>
        </div>
        <div className="gHeroImg2">
          <img src={grp1} alt="group1" />
        </div>
      </div>
      <AdsOffer ads={ads} />
       <Section1 
      MainSection={MainSection}  MiniSectionData={MiniSectionData} Section1Data={Section1Data} Section2Data={Section2Data} Section3Data={Section3Data}
      research={research} research2={research2} Scaling={Scaling} growth={growth}  />
      <Quality QualityData={QualityData} />
      <div className="gAdWorks">
        <div className="gAdWorkImg">
          <img src={revenueGrowthImg} alt="Growth Image" />
        </div>
        <div className="gAdWorkContent1">
          <h1>Why We're Not a Typical Google Ads Agency</h1>
          <ul>We Believe
           {gAdsWorks.FeatureList1.map((feature,index)=>( <li key={index} >{feature}</li> ))}
          </ul> 
          <ul>We do not work with:
             {gAdsWorks.FeatureList2.map((feature,index)=>( <li key={index} >{feature}</li> ))}
          </ul>
        </div>
        <div className="gAdWorkContent2">
          <h1>Who Google Ads Works Best For</h1>
          <ul>
              {gAdsWorks.FeatureList3.map((feature,index)=>( <li key={index} >{feature}</li> ))}
          </ul>
          <p>If your business values precision over volume, Google Ads is powerful.</p>
        </div>
        <div className="gAdWorkImg">
          <img src={ads2} alt="Ad Image" />
        </div>
      </div>
      <GetinTouch GetinTouchData={GetinTouchData} />

    </div>

  )
}

export default GoogleAds
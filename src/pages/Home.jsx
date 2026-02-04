import Hero from '../components/Hero'
import Quality from '../components/Quality'
import Philosophy from '../components/Philosophy'
import './Home.css'
import Services from '../components/Services'
import GetinTouch from '../components/GetinTouch'
import Section1 from '../components/Section1'
import invention from '../assets/invention.jpg'
import grow from '../assets/growth6.jpg'
import teamwork6 from '../assets/teamwork6.jpg'


const Home = () => {
  const QualityData={
    heading:"Why We're Not a Regular Agency",
    heading1:"We are not built for",
    Qlist_1:["Short-term thinking","Rigid expectations during testing","Hit-and-run campaigns"],
    heading2:"We Believe",
    Qlist_2:["Business owners' knowledge matters","Collaboration drives better decisions",
              "Flexibility leads to stronger outcomes Long-term commitment creates real value"]
  }
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
      <Philosophy/>
      <Quality QualityData={QualityData} />
      <Services/>
      <GetinTouch GetinTouchData={GetinTouchData} />
      <Section1 
      MainSection={MainSection}  MiniSectionData={MiniSectionData} Section1Data={Section1Data} Section2Data={Section2Data} Section3Data={Section3Data}
      research={research} research2={research2} Scaling={Scaling} growth={growth}  />
    </div>
  )
}

export default Home
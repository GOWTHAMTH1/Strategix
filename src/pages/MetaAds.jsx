import GetinTouch from "../components/GetinTouch"
import Hero from "../components/Hero"
import adsImg from '../assets/Ads.jpg'
import AdsOffer from "../components/AdsOffer"
import MetaAdsHero from "./MetaAdsHero"

const MetaAds = () => {
   const GetinTouchData={
    subheading:"Let's build perfomance-the rightway",
    heading:"Ready to Build Meta Ads That Actually Convert?",
    description:"If you are serious about quality leads, scalable results, and long-term growth,we are ready to work with you",
    buttonName:"Registration"
  }
  const ads={
    title:"What We Offer in Meta Ads",
    ulhead1:"Meta Ads Services We Specialize in",
    features1:["Facebook Ads","Instagram Ads","Lead Generation Compagne"," Conversion & Sales Campaigns Remarketing & Retargeting","Creative Testing & Optimization"
],
    ulhead2:"We Manage Meta Ads Meta Ads For",
    features2:["B2C brands (Commerce, services, locol & nationalbusinessos)","B2B companies (lead generation, high-ticket services,Ads"],
    img:adsImg
  }
  return (
    <div className="fragment" >
      <Hero title="AI Meta Ads Management"
       subtitle="At Strategic Digital Media, We Use Meta Ads (Facebook & instagram) To Build Predictable, High-Quality Lead Systems, Not Random Ad Campaigns."
      />
      <MetaAdsHero/>
      <GetinTouch GetinTouchData={GetinTouchData} />
      <AdsOffer ads={ads} />
    </div>
  )
}

export default MetaAds
import teamwork2 from '../assets/laptop.jpg'
import aiEarth from '../assets/aearth.png'
import '../Meta.css'
const MetaAdsHero = () => {
    const nav=["Google Ads","Meta Ads","Digital Marketing"]
    const strategy1=["Brand & offer clarity",
        "Audience behavior analysis","Funnel & messaging clignment",
        "Competitor creative research","Platform su tablility validation"]
    const strategy2=[
        "Test mutiple audiences & crectives","Analyse A-driven performance signals","Remove low-quality segments",
        "Improve lead intent and relevance","Optimis delivery and costs"]
    const strategy3=["Winning audiences are scoled"," Creatives are refined","Cost per quality lead improves" ,"Performance becomes predictable"]        
  return (
    <>
        <div className="metaHeroContainer">
            <div className="Meta1" >
                <div className="head">
                    <div className="subtitle">Why Choose</div>
                    <h3 className="title">When <span style={{color:"blue"}} >Meta Ads Works </span>  (When Strategy Comes First)</h3>
                </div>
                <div className="Metafeatures">
                    <div className="features">
                        <div>
                            <h4>Leads are low quality</h4>
                            <p>Not all leads are equal Poor torgeting, weak creatives, and incorrect audience selection bring inquiries that never convert. Your sales team wastes time chasing unqualified prospects instead of real buyers.</p>
                        </div>    
                        <div>
                            <h4>Costs increase</h4>
                            <p>Rising ad competition and inefficient compaign structures drive up your cost per lead. When ads are not optimized regularly, budgets get consumed faster with lower returns. Incorrect bidding strategies and poor landing page performance directly impact your ROL</p>
                        </div>    
                        <div>
                            <h4>Campaigns burn budgets</h4>
                            <p>Many compagne run on autopilot without real strategy o analysis. Money gets spent, but goals are not achieved. Lock
of tracking, imprope    r audience segmentation, and untested creatives result in wosted ad spend</p>
                        </div> 
                    </div>       
                </div>    
            </div>
            <div className="Meta2" >
                <div className='detail' >
                    <p>Meta Ads is not just about visibility.</p>
                    <h6>It's about understanding behavior, intent, and psychology.</h6>
                </div>
                <div className="img1">
                    <img src={teamwork2} alt="" />
                </div>       
            </div>
            <div className="Meta3" >
                <div className="mininav">
                    {nav.map((data,index)=>( <li key={index} >{data}</li> ))}
                </div>
            </div>
            <div className="Meta4" >
                <div className="head1">
                    <div className="subtitle1">Our Services</div>
                    <h3 className="title1">Our Meta Ads Al Strategy</h3>
                </div>
                 <div className="img2">
                    <img src={aiEarth} alt="" />
                </div>
            </div>
            <div className="Meta5" >
                <div className="strategy1">
                    <div className="task">
                        <h3>Research & Development First (Week 1)</h3>
                        <p>Before launching ads, we invest full wook in understanding your business and audience
This includes           </p>
                        <ul>
                             {strategy1.map((data,index)=>( <li key={index} >{data}</li> ))}
                        </ul>
                    </div>
                </div>
                <div className="strategy2">
                    <div className="task">
                        <h3>Growth & Optimization Phase (Month 1)</h3>
                        <p>The first month is treated as a learning and growth stage.</p>
                        <ul>
                            {strategy2.map((data,index)=>( <li key={index} >{data}</li> ))}
                        </ul>
                    </div>
                    <li></li>
                </div>
                <div className="strategy3">
                    <div className="task">
                        <h3>Scaling with Control </h3>
                        <ul>
                             {strategy1.map((data,index)=>( <li key={index} >{data}</li> ))}
                        </ul>
                    </div>
                    <li></li>
                </div>
            </div>
        </div>
    </>
  )
}

export default MetaAdsHero
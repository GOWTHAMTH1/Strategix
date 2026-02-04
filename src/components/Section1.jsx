import '../Global.css'

const Section1 = ({MainSection,MiniSectionData,Section1Data,Section2Data,Section3Data,research, research2,growth,Scaling}) => {
  return (
    <div className="MainSection">

        <div className="MiniSection1">
                <div className="heading">
                    <h1>{MiniSectionData.heading}</h1>
                    <p>{MiniSectionData.subheading}</p>
                </div>
        </div>
             <div className="section1"> 
                <div className="bgImg">  
                    <div className="content1">
                        <h1>{Section1Data.heading}</h1>
                        <p>{Section1Data.description}</p>
                        <ul>{Section1Data.ulHead1}
                           {research.map((content,index)=>( <li key={index} >{content}</li> ))}
                        </ul>
                        <ul>{Section1Data.ulHead2}
                           {research2.map((content,index)=>( <li key={index} >{content}</li> ))}
                        </ul>
                    </div>
                </div>     
                <div className="researchImg">
                    <img src={MainSection.inventionImg} alt="invention image" />
                </div>
            </div>

        <div className="section2">
            <div className="growthImg">
                <img src={MainSection.growthImg} alt="growth image" />
            </div>
            <div className="bgImg">
                <div className="growthInfo">
                    <div>
                        <h1>{Section2Data.heading}</h1>
                        <p>{Section2Data.description}</p>
                    </div>
                    <ul> {Section2Data.ulHead1}
                        {growth.map((content,index)=>( <li key={index} >{content}</li>))}
                    </ul>
                    <p></p> 
                </div>
            </div>
        </div>
    
        <div className="section3">
             <div className="bgImg">
                <div className='scaling'>
                    <div>
                        <h1>{Section3Data.heading}</h1>
                        <p>{Section3Data.description}</p>
                    </div>
                    <ul>{Section3Data.ulhead1}
                        {Scaling.map((content,index)=>( <li key={index} >{content}</li>))}
                    </ul>
                    <p></p>
                </div>
            </div>    
            <div className="scalingImg">
                <img src={MainSection.teamworkImg} alt="teamworkImage" />
            </div>
        </div>
    </div>
    
 
  )
}

export default Section1
import '../Global.css'
const Section1 = ({heading,description,subheading1,para1,subheading2,para2,subheading3,para3}) => {
  return (
    <>
    <div className="MainSection">

        <div className="MiniSection1">
                <div className="heading">
                    <h1>{heading}</h1>
                    <p>{description}</p>
                </div>
        </div>
             <div className="section1">    
                <div className="content1">
                    <h1>{subheading1}</h1>
                    <p>{para1}</p>
                    <ul>
                        <li></li>
                    </ul>
                    <ul>
                        <li></li>
                    </ul>
                </div>
                <div className="researchImg">
                    <img src="" alt="" />
                </div>
            </div>
            
        

        <div className="section2">
            <div className="growthImg">
                <img src="" alt="" />
            </div>
            <div className="growthInfo">
                <div>
                    <h1>{subheading2}</h1>
                    <p>{para2}</p>
                </div>
                <ul>
                    <li></li>
                </ul>
                <p></p> 
            </div>
        </div>

        <div className="section3">
            <div>
                <div>
                    <h1>{subheading3}</h1>
                    <p>{para3}</p>
                </div>
                <ul>
                    <li></li>
                </ul>
                <p></p>
            </div>
            <div className="scalingImg">
                <img src="" alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default Section1
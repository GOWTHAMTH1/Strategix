
const Quality = ({QualityData}) => {
  return (
    <div className="fragment" >
        <h1 className="Qh1">{QualityData.heading}</h1>
        <div className="Quality">
          <div className="Qlist-1" >
            <h4>{QualityData.heading1}</h4>
            {QualityData.Qlist_1.map((content,index)=>( <li key={index}>{content}</li> ))}
          </div>
          <div className="Q-list2" >
            <h4>{QualityData.heading2}</h4>
             {QualityData.Qlist_2.map((content,index)=>( <li key={index}>{content}</li> ))}
          </div>
        </div>
    </div>
  )
}

export default Quality
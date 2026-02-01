import aiearth from '../assets/aearth.jpg'
const Services = () => {
    const specializedIn=[
        "Meta ads",
        "Google ads",
        "B2B and B2C bussiness",
        "We never force bussiness onto every platform",
        "we support analyze and reccommend only what truly works"
    ]
  return (
    <div className="services section">
        <div className="aierathImg" >
            <img src={aiearth} alt="ai earth" />
        </div>
       <div className="content">
        <section >
            <p>What we do,</p>
            <h1 >Your trusted partner for <span style={{color:"blue"}} >DIGITAL SUCCESS</span></h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus eum debitis obcaecati architecto quia veniam vitae suscipit eveniet quod atque.</p>
            <div className="specifications" >
                <ul>
                    {specializedIn.map((specials,index)=>(<li key={index}>{specials}</li> ))}
                </ul>
            </div>
        </section>

       </div>

    </div>
  )
}

export default Services
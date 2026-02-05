import '../Global.css'
const Hero = ({title,subtitle}) => {
  return (
    <div className="hero ">
      <div className='content'>
        <div className='heading'>{title}</div>
        <p>{subtitle}</p>
      </div>
    </div>
  )
}

export default Hero
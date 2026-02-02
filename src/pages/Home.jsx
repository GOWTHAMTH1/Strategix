import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import './Home.css'
import Services from '../components/Services'
import GetinTouch from '../components/GetinTouch'
import Section1 from '../components/Section1'
const Home = () => {
  return (
    <div className="home" >
      <Hero title="CUZTOMIZABLE DIGITAL MARKETING SERVICES WITH AI"
      subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, id."
      />
      <Philosophy
       title="OUR PHILOSOPHY : PARTNERSHIP FIRST"
       subtitle="Lorem ipsum dolor sit amet consectetur adipisicing dolor sit amet consectetur adipisicing  elit Corruptiid lorem"
      />
      <Services/>
      <GetinTouch
       subtitle="lorem ipsum dolor sit amet"
       heading="ipsum dolor sit amet consectetur adipisicing" 
       description="Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur sit amet consectetur adipisicing elit. Corrupti, id."
       btnName="BOOK A SDM" 
       />
       <Section1
       />
    </div>
  )
}

export default Home
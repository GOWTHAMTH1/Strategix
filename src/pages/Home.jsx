import Hero from '../components/Hero'
import Philosophy from '../components/Philosophy'
import './Home.css'
import Services from '../components/Services'
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
    </div>
  )
}

export default Home

import './App.css'
import CommonQuestion from './components/CommonQuestion'
import FeaturesSecond from './components/FeatureSecSecond'
import Features from './components/FeatureSection'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'

function App() {
  

  return (
    <>
      <div >
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Features></Features>
        <FeaturesSecond></FeaturesSecond>
        <CommonQuestion></CommonQuestion>
      </div>
    </>
  )
}

export default App


import './App.css'
import CommonQuestion from './components/CommonQuestion'
import FeaturesSecond from './components/FeatureSecSecond'
import Features from './components/FeatureSection'
import FeatureThird from './components/FeatureThirdSection'
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
        <FeatureThird></FeatureThird>
        <CommonQuestion></CommonQuestion>
      </div>
    </>
  )
}

export default App

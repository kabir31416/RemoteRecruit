
import './App.css'
import CommonQuestion from './components/CommonQuestion'
import CTASection from './components/CTASection'
import FeaturesSecond from './components/FeatureSecSecond'
import Features from './components/FeatureSection'
import FeatureThird from './components/FeatureThirdSection'
import Footer from './components/Footer'
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
        <CTASection></CTASection>
        <CommonQuestion></CommonQuestion>
        
        <Footer></Footer>
      </div>
    </>
  )
}

export default App

import Header from "./components.jsx/Header"
import SectionHero from "./components.jsx/SectionHero"
import SectionTwo from "./components.jsx/SectionTwo"
import SectionThre from "./components.jsx/SectionThre"
import SectionFour from "./components.jsx/SectionFour"
import Footer from "./components.jsx/Footer"


export default function App() {
  return (
    <div className='bg-midnight-green w-full'>
    <Header/>
    <SectionHero/>
    <div className="bg-sacramento-state-green w-full">
      <SectionTwo/>
    </div>
    <div className="bg-deep-jungle-reen w-full">
    <SectionThre/>
    </div>
    <div className="bg-light-coral w-full">
      <SectionFour/>
    </div>
    <div className="bg-dark-green w-full">
      <Footer/>
    </div>
    </div>
    
  )
}


import Hero from './components/Hero'
import StatsBanner from './components/StatsBanner'
import StepsSection from './components/StepsSection'
import PricingSection from './components/PricingSection'
import ToolsSection from './components/ToolsSection'

import { Suspense, useState } from 'react'

import './App.css'
import CTA from './components/CTA'
import Footer from './components/Footer'
const toolList = async () => {
 const res = await fetch('/Products.json')
  return res.json();
};

const toolPromise = toolList()
function App() {
  const [cart, setCart] = useState([])

  return (
    <>
    <Hero cartCount={cart.length} />

    <StatsBanner></StatsBanner>
    <ToolsSection toolPromise={toolPromise} cart={cart} setCart={setCart}/>
    
    <StepsSection></StepsSection>
    <PricingSection></PricingSection>
    <CTA></CTA>
    <Footer></Footer>
    </>
  )
}

export default App

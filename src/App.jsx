import Hero from './components/Hero'
import StatsBanner from './components/StatsBanner'
import StepsSection from './components/StepsSection'
import PricingSection from './components/PricingSection'

import { useState } from 'react'

import './App.css'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  

  return (
    <>
    <Hero/>

    <StatsBanner></StatsBanner>

    <StepsSection></StepsSection>
    <PricingSection></PricingSection>
    <CTA></CTA>
    <Footer></Footer>
    </>
  )
}

export default App

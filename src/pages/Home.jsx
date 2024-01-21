import React from 'react'
import Hero from '../components/Hero/Hero'
import ReelWords from '../components/ReelWords/ReelWords'
import FutureTechFeatures from '../components/FutureTechFeatures/FutureTechFeatures'

function Home() {
  return (
    <>
      <Hero />
      <FutureTechFeatures/>
      <ReelWords />
    </>
  )
}

export default Home
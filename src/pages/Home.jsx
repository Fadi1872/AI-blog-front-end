import React from 'react'
import Hero from '../components/Hero/Hero'
import ReelWords from '../components/ReelWords/ReelWords'
import FutureTechFeatures from '../components/FutureTechFeatures/FutureTechFeatures'
import InterActions from '../components/InterActions/InterActions'
import Posts from '../components/Posts/Posts'

function Home() {
  return (
    <>
      <Hero />
      <FutureTechFeatures/>
      <Posts/>
      <ReelWords />
    </>
  )
}

export default Home
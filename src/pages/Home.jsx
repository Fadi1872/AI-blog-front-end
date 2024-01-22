import React from 'react'
import Hero from '../components/Hero/Hero'
import ReelWords from '../components/ReelWords/ReelWords'
import InterActions from '../components/InterActions/InterActions'
import Posts from '../components/Posts/Posts'

function Home() {
  return (
    <>
      <Hero />
      <Posts/>
      <ReelWords />
    </>
  )
}

export default Home
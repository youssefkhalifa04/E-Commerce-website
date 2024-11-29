import React from 'react'
import { Header } from '../header/Header'
import { Hero } from '../hero/Hero'
import { Footer } from '../footer/Footer'

import LatestCollection from '../hero/LatestCollection'
export const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <LatestCollection/>
        <Footer/>
        
    </div>
  )
}

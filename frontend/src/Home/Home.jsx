import React from 'react'
import { Header } from '../header/Header'
import { Hero } from '../hero/Hero'
import { Footer } from '../footer/Footer'
import Collection from '../hero/Collection'
export const Home = () => {
  return (
    <div>
        <Header/>
        <Hero/>
        <Collection/>
        <Footer/>
        
    </div>
  )
}

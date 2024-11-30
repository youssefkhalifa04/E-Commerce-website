import React from 'react'
import { Header } from '../header/Header'
import { Hero } from '../hero/Hero'
import { Footer } from '../footer/Footer'
import { Context } from '../../App'
import { useContext } from 'react'
import LatestCollection from '../hero/LatestCollection'
export const Home = () => {
  const [profile , setProfile] = useContext(Context);
  // setProfile("hello world");
  return (
    <div>
        <Header />
        <Hero/>
        <LatestCollection/>
        <Footer/>
        
    </div>
  )
}

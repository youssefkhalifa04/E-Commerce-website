import React, { useState } from 'react';
import './App.css';
import {Cart} from './shoppingBasket/Cart'
import {Header} from './header/Header'
import {Hero} from './hero/Hero'
import {Footer} from './footer/Footer'
import { Carousel } from './Carousel/Carousel';
function App(){
    return(
      <>
          <Header/>
            <Hero/>
            <section className='flex flex-col justify-center items-center pt-10'>
                <h1 className='pb-10 text-3xl'>Our latest Products</h1>
                <Carousel/>
            </section>
            <Footer/>
          
      
      </>
    );
}
export default App;

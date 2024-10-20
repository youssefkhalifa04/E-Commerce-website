import React from 'react'
import img1 from "../assets/image1.png"
import img2 from "../assets/image2.png"
import img3 from "../assets/image3.png"
import img4 from "../assets/image4.png"
import img5 from "../assets/image5.png"
import img6 from "../assets/image6.png"
import img7 from "../assets/img7.png"
import img8 from "../assets/img8.png"
import img9 from "../assets/img9.png"

const Collection = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-100 py-20'>
        <h1 className="text-4xl font-bold text-gray-600 mb-10 text-center">
          LATEST COLLECTION
        </h1>
        <div className='grid grid-cols-3 gap-11'>
          <div className='text-center'>
            <img src={img1} alt="Man Round Neck Pure Cotton" className='transform hover:scale-105 transition-transform duration-300' />
            <p className='mt-2 text-gray-600'>Man Round Neck Pure Cotton <br /> $64</p>
          </div>
          <div className='text-center'>
            <img src={img2} alt="Men Printed Plain Cotton Shirt" className='transform hover:scale-105 transition-transform duration-300'/>
            <p className='mt-2 text-gray-600'>Men Printed Plain Cotton Shirt <br /> $52</p>
          </div>
          <div className='text-center'>
            <img src={img3} alt="Women Zip-Front Relaxed fit"className='transform hover:scale-105 transition-transform duration-300' />
            <p className='mt-2 text-gray-600'>Women Zip-Front Relaxed fit <br /> $78</p>
          </div>
          <div className='text-center'>
            <img src={img4} alt="Women Zip-Front Relaxed fit"className='transform hover:scale-105 transition-transform duration-300' />
            <p className='mt-2 text-gray-600'>Women Zip-Front Relaxed fit <br /> $78</p>
          </div>
          <div className='text-center'>
            <img src={img5} alt="Women Zip-Front Relaxed fit"className='transform hover:scale-105 transition-transform duration-300' />
            <p className='mt-2 text-gray-600'>Women Zip-Front Relaxed fit <br /> $78</p>
          </div>
          <div className='text-center'>
            <img src={img6} alt="Women Zip-Front Relaxed fit" className='transform hover:scale-105 transition-transform duration-300'/>
            <p className='mt-2 text-gray-600'>Women Zip-Front Relaxed fit <br /> $78</p>
          </div>
        </div>
        <h1 className='font-bold text-4xl text-gray-600 mb-12 text-center mt-10'>BEST SELLERS</h1>
        <div className=' grid grid-cols-4 gap-11'>
          <div className='text-center'>
            <img src={img5} alt=""  className='transform hover:scale-105 transition-transform duration-300'/>
            <p className='mt-2 text-gray-600'>Women Zip-Front Relaxed fit <br />$71</p>
          </div>
       
          <div className='text-center'>
            <img src={img9} alt=""  className='transform hover:scale-105 transition-transform duration-300'/>
            <p className='mt-2 text-gray-600'>Women Zip-Front Relaxed fit <br />$71</p>
          </div>
        
        
          <div className='text-center'>
            <img src={img8} alt=""  className='transform hover:scale-105 transition-transform duration-300'/>
            <p className='mt-2 text-gray-600'>Women Zip-Front Relaxed fit <br />$71</p>
        
        </div>
          <div className='text-center'>
            <img src={img7} alt=""  className='transform hover:scale-105 transition-transform duration-300'/>
            <p className='mt-2 text-gray-600'>Women Zip-Front Relaxed fit <br />$71</p>
          </div>
        </div>
        </div>
  )
}

export default Collection

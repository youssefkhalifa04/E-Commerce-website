import React, { useState } from 'react';
import img1 from "../../assets/image1.png";
import img2 from "../../assets/image2.png";
import img3 from "../../assets/image3.png";
import img4 from "../../assets/image4.png";
import img5 from "../../assets/image5.png";
import img6 from "../../assets/image6.png";
import img7 from "../../assets/img7.png";
import img8 from "../../assets/img8.png";
import img9 from "../../assets/img9.png";

const Collection = () => {
  const [screenSize, setScreenSize] = useState(window.innerWidth);

  useEffect(() => {
 
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };


    window.addEventListener("resize", handleResize);


    return () => window.removeEventListener("resize", handleResize);
  }, []);


  const productsClassname = screenSize > 768 ? "grid grid-cols-3 gap-11 ": "grid grid-cols-2 gap-11";
  const bestClassname = screenSize > 768 ? "grid grid-cols-4 gap-11": "grid grid-cols-3 gap-11";

  const [products, setProducts] = useState([
    { id: 1, img: img1, name: "Man Round Neck Pure Cotton", price: "$64" },
    { id: 2, img: img2, name: "Men Printed Plain Cotton Shirt", price: "$52" },
    { id: 3, img: img3, name: "Women Zip-Front Relaxed fit", price: "$78" },
    { id: 4, img: img4, name: "Women Zip-Front Relaxed fit", price: "$78" },
    { id: 5, img: img5, name: "Women Zip-Front Relaxed fit", price: "$78" },
    { id: 6, img: img6, name: "Women Zip-Front Relaxed fit", price: "$78" },
  ]);

  const [bestSellers, setBestSellers] = useState([
    { id: 1, img: img5, name: "Women Zip-Front Relaxed fit", price: "$71" },
    { id: 2, img: img9, name: "Women Zip-Front Relaxed fit", price: "$71" },
    { id: 3, img: img8, name: "Women Zip-Front Relaxed fit", price: "$71" },
    { id: 4, img: img7, name: "Women Zip-Front Relaxed fit", price: "$71" },
  ]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 py-20">
      <h1 className="text-4xl font-bold text-gray-600 mb-10 text-center">
        LATEST COLLECTION
      </h1>
      
      <div className='grid grid-cols-3 gap-11'>
        {products.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.img}
              alt={product.name}
              className="transform hover:scale-105 transition-transform duration-300"
            />
            <p className="mt-2 text-gray-600">
              {product.name} <br /> {product.price}
            </p>
          </div>
        ))}
      </div>

      <h1 className="font-bold text-4xl text-gray-600 mb-12 text-center mt-10">
        BEST SELLERS
      </h1>
      
      <div className='grid grid-cols-4 gap-11'>
        {bestSellers.map((product) => (
          <div key={product.id} className="text-center">
            <img
              src={product.img}
              alt={product.name}
              className='transform hover:scale-105 transition-transform duration-300'
            />
            <p className="mt-2 text-gray-600">
              {product.name} <br /> {product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collection;

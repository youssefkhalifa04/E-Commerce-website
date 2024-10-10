import React from 'react'

export const Hero = () => {
  return (
    <div
    className="hero min-h-screen"
    style={{
      backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
    }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
            <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                <p className="mb-5">
                    Shop the Best Products at Unbeatable Prices. Fast Shipping & Easy Returns!
                </p>
                <button className="btn btn-primary">Get Started</button>
            </div>
        </div>
    </div>
  )
}

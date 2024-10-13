import React from "react";
import { useNavigate } from "react-router-dom";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Header /> {/* Move Header to the top */}
      <div className="hero bg-base-200 flex-grow flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse mt-16">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Sign Up Now!</h1>
            <p className="py-6">
              E-Shopping offers a seamless online shopping experience, featuring
              a wide variety of products at competitive prices, all from the
              comfort of your home.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Sign Up</button>
              </div>
              <label className="label">
                <div className="flex justify-center items-center w-full">
                  <a
                    href="#"
                    className="label-text-alt link link-hover"
                    onClick={() => navigate("/Login")}
                  >
                    Already have an account?
                  </a>
                </div>
              </label>
            </form>
          </div>
        </div>
      </div>
      <Footer /> {/* Move Footer to the bottom */}
    </div>
  );
};

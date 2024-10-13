import React from "react";
import { ThemeController } from "./ThemeController";
import { useNavigate } from "react-router-dom";
import img from "../assets/person.svg";

export const Header = () => {
  const navigate = useNavigate(); // Hook call here

  return (
    <div className="fuck fixed top-0 right-0 left-0 z-50">
      <div className="navbar bg-base-100 flex items-center justify-around">
        <div className="">
          <a className="btn btn-ghost text-xl">EShopper</a>
        </div>
        <ul className="menu menu-horizontal p-0 ml-10">
          <li>
            <a className="hover:bg-transparent">Home</a>
          </li>
          <li>
            <a className="hover:bg-transparent">About</a>
          </li>
          <li>
            <a className="hover:bg-transparent">Products</a>
          </li>
          <li>
            <a className="hover:bg-transparent">Contact</a>
          </li>
        </ul>

        <div className="flex-none">
          <ThemeController />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>

            <div
              tabIndex={0}
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
            >
              <div className="card-body">
                <span className="text-lg font-bold">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  {/* Use navigate here */}
                  <button
                    className="btn btn-primary btn-block"
                    onClick={() => navigate("/cart")}
                  >
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-9 rounded-full">
              <img src={img} alt="" onClick={() => navigate('/login')} />

              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

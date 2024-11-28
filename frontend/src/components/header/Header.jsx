import React from "react";
import { Theme } from "./Theme";
import { useNavigate } from "react-router-dom";
import img from "../../assets/person.svg";
import "./header.css";
import menu from "../../assets/menu.svg";
export const Header = () => {
  const navigate = useNavigate();

  const isAdmin = true;
  return (
    <div
      id="header"
      className="fixed top-0 right-2 left-0 z-50 border-b-2 border-base-200"
    >
      <div className="navbar bg-base-100 flex items-center justify-around">
        <div className="">
          <a className="btn btn-ghost text-xl" onClick={() => navigate("/")}>
            EShopper
          </a>
        </div>
        <ul id="navmnu" className="menu menu-horizontal p-0 ml-10">
          <li>
            <a className="hover:bg-slate-100" onClick={() => navigate("/")}>
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:bg-slate-100"
              onClick={() => navigate("/about")}
            >
              About{" "}
            </a>
          </li>
          <li>
            <a className="hover:bg-slate-100" onClick={() => navigate("/collection")}>Collection</a>
          </li>
          <li>
            <a
              className="hover:bg-slate-100"
              onClick={() => navigate("/contact")}
            >
              Contact{" "}
            </a>
          </li>
          {isAdmin && (
            <li>
              <button type="button" class="btn btn-secondary"
                onClick={() => navigate("/admin")}>
                Admin
              </button>
            </li>
          )}
        </ul>

        <div className="flex-none">
          <div id="hello">
            <Theme />
          </div>

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
                <span className="text-lg font-bold z-5">8 Items</span>
                <span className="text-info">Total: $999</span>
                <div className="card-actions">
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
              <div className="w-8 rounded-full">
                <img src={img} alt="" onClick={() => navigate("/login")} />
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

              <li id="theme-in-dropdown" style={{ display: "none" }}>
                <Theme />
              </li>
            </ul>
          </div>

          <div id="drawerH" className="drawer z-9999999">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              <label htmlFor="my-drawer" className="rounded-full btn">
                <img src={menu} className="w-6 cursor-pointer" />
              </label>
            </div>
            <div className="drawer-side">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"
              ></label>
              <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                <li>
                  <a onClick={() => navigate("/")}>Home</a>
                </li>
                <li>
                  <a onClick={() => navigate("/about")}>About</a>
                </li>
                <li>
                  <a>Products</a>
                </li>
                <li>
                  <a>Contact</a>
                </li>
                <li>
                  <a onClick={() => navigate("/admin")}>Admin</a>
                </li>
                <li>
                  <Theme />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

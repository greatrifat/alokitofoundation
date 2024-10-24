"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./navLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./menuOverlay";

const navLinks = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Goal",
    path: "/goal",
  },
  {
    title: "Members List",
    path: "/membersList",
  },
  {
    title: "Contact",
    path: "/contact",
  },
  {
    title: "FAQ",
    path: "/faq",
  },
  {
    title: "Project",
    path: "/project",
  },
  
];
export default function Navbar(){
    const [navbarOpen, setNavbarOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return(
        <nav className="fixed top-0 left-0 right-0 z-10 pt-1 lg:pt-1 mx-auto border border-[#33353F] bg-[#121212] bg-opacity-100">
        <div className="flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2">
          <Link
            href={"/"}
            className="text-xl md:text-xl text-white font-semibold"
          >
            Alokito Foundation
          </Link>
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
          <div className="menu hidden md:block md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              
              ))}
              
              {isLoggedIn ? (
              <li className="relative group">
              {/* Dropdown for Logout */}
              <NavLink href="/" title="LogOut" />
              </li>
              ) : (
              <li>
              <NavLink href="/auth/signup" title="Register/Login" />
              </li>
              )}

            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    )
}
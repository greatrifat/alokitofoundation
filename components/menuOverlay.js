"use client";
import React, { useState } from "react";
import NavLink from "./navLink";

const MenuOverlay = ({ links }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
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
              <NavLink href="/signUp" title="Register/Login" />
              </li>
              )}
    </ul>
  );
};

export default MenuOverlay;
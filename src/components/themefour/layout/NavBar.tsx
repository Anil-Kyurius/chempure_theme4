"use client";
import React from "react";

import Header from "./components/Header";
export default function NavBar() {
  return (
    <div className="absolute top-0 w-[100%] h-[65px] z-[999]">
      <Header />
    </div>
  );
}

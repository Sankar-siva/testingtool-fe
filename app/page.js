"use client"
import HomePage from "../components/HomePage"
import LoggedInHeader from "../components/Header/LoggedInHeader"
import FooterLoggedIn from "../components/Footer/FooterLoggedIn"
import { useState } from "react";
import WebHome from "@/components/WebHome";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  if (!isLoggedIn) {
    return <WebHome />
  }

  return (
    <div className="min-h-screen bg-[#F7F0FF]">
      <LoggedInHeader />
      <div className="flex items-center justify-center px-6  lg:px-16 py-3 lg:py-5">
        <HomePage />
      </div>
    </div>
  );
}

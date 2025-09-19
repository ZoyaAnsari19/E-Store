import React from "react";
import HeroSection from "../components/home/HeroSection";
import RecentAdded from "../components/home/RecentAdded";
import FeaturedProducts from "../components/home/FeaturedProducts";

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <RecentAdded />
    </>
  )
}

import HomeSection from "@/components/sections/HomeSection";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";

const HomePage = () => (
  <>
    <div className="mx-auto w-2/3 md:w-4/5 max-sm:w-9/10">
      <Header />
      <div className={"h-25"}></div>
      <HomeSection />
    </div>
    <Footer />
  </>
);

export default HomePage;

"use client";
import HomeSection from "@/components/layouts/HomeSection";
import Footer from "@/components/ui/Footer";
import Header from "@/components/ui/Header";
import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

const HomePage = () => (
  <QueryClientProvider client={queryClient}>
    <div className="mx-auto w-2/3 md:w-4/5 max-sm:w-9/10">
      <Header />
      <div className={"h-25"}></div>
      <HomeSection />
    </div>
    <Footer />
  </QueryClientProvider>
);

export default HomePage;

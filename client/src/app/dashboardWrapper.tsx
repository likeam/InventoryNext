"use client";

import React from "react";
import Navbar from "@/app/(components)/Navbar";
import Sidebar from "./(components)/Sidebar";
import StoreProvider, { useAppSelector } from "./redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const isSiderbarOpen = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div className={` flex bg-gray-800 text-gray-50 w-full min-h-screen`}>
      <Sidebar />
      <main
        className={` flex flex-col w-full h-full py-7 px-9 bg-gray-700 ${
          isSiderbarOpen ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};

export default DashboardWrapper;

import React from "react";
import Navbar from "@/app/(components)/Navbar";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={` flex bg-gray-800 text-gray-50 w-full min-h-screen`}>
      sidebar
      <main
        className={` flex flex-col w-full h-full py-7 px-9 bg-gray-700 md:pl-24`}
      >
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardWrapper;

"use client";
import React, { FC } from "react";
import Image from "next/image";


const Header: FC = () => {
  return (
    <header className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-5 flex justify-between items-center p-4">
        <div className="flex items-center space-x-3">
          <Image src="/assets/images/logo_tcit.svg" alt="Logo" width={150} height={80} />
        </div>
      </div>
    </header>
  );
};
// ...existing code...

export default Header;

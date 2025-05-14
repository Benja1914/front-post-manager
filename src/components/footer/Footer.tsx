"use client";
import React, { FC } from "react";
import Image from "next/image";

const Footer: FC = () => {
  return (
    <footer className="w-full bg-white shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto flex justify-center items-center p-4">
        <Image src="/assets/images/logo_tcit.svg" alt="Logo" width={150} height={80} />
      </div>
    </footer>
  );
};

export default Footer;

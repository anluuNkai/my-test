import React from "react";
import Image from "next/image";
import logo from "@/assets/svg/envato_market.svg";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-[#262626] fixed top-0 right-0 left-0">
      <Image src={logo} alt="Envato Market Logo" width={120} height={40} />
      <div className="text-white px-5 py-2 bg-[#82b440] hover:bg-[#6f9a37] rounded-md">Buy now</div>
    </nav>
  );
};

export default Navbar;

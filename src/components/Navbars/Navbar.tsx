import React from "react";
import { Logo } from "../Icons/Logo";

export const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="bg-[white] gap-28 border-white relative top-0 left-0 w-screen h-[84px] border rounded grid grid-cols-3 place-content-around text-center"
    >
      <div id="navbar-menu" className="ml-0 md:ml-[132px] lg:ml-[132px]">
        <ul className="flex items-center text-sm font-normal">
          <li className="p-5">Vision</li>
          <li className="p-5 text-neutral-600">Creadores</li>
          <li className="p-5">Demo</li>
          <li className="p-5">Contacto</li>
        </ul>
      </div>

      {/* Contenedor para centrar la imagen */}
      <div className="flex justify-center items-center">
        <Logo/>
      </div>

      <div id="navbar-menu3" className="">
        a
      </div>
    </nav>
  );
};

import React from "react";

interface props {
    children: React.ReactNode;
}

export const NavMenu = ({children}: props) => {
  return (
    <div id="navbar-menu" className="ml-0 md:ml-[132px] lg:ml-[132px]">
      <ul className="flex items-center text-sm font-normal">
       {children}
      </ul>
    </div>
  );
};

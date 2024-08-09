import React from "react";
import { Logo } from "../Icons/Logo";
import { NavMenu } from "./Menus/NavMenu";
import { NavItem } from "./NavItem";
/**
 * Componente que renderiza la barra de navegación
 */
const NavbarItems = [
  {
    title: "Vision",
    toGo: "#vision",
    styleContainer: "p-5",
  },
  {
    title: "Creadores",
    toGo: "#creadores",
    styleContainer: "p-5",
    styleText: "text-neutral-600",
  },
  {
    title: "Demo",
    toGo: "#demo",
    styleContainer: "p-5",
  },
  {
    title: "Contacto",
    toGo: "#contacto",
    styleContainer: "p-5",
  },
];
/**
 * Navbar Componente que renderiza la barra de navegación
 * @returns Componente de la barra de navegación
 */
export const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="bg-[white] gap-28 border-white relative top-0 left-0 w-screen h-[84px] border rounded grid grid-cols-3 place-content-around text-center"
    >
      <NavMenu>
        {NavbarItems.map((item, index) => (
          <NavItem
            key={index}
            title={item.title}
            toGo={item.toGo}
            styleContainer={item.styleContainer}
            styleText={item.styleText}
          />
        ))}
      </NavMenu>

      {/* Contenedor para centrar la imagen */}
      <div className="flex justify-center items-center">
        <Logo />
      </div>

      <div id="navbar-menu3" className="">
        a
      </div>
    </nav>
  );
};

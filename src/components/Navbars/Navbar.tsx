import React from "react";
import { Logo } from "../Icons/Logo";
import { NavMenu } from "./Menus/NavMenu";
import { NavItem } from "./NavItem";
import { Button } from "../Buttons/Button";
/**
 * Componente que renderiza la barra de navegación
 */
const NavbarItems = [
  {
    title: "Vision",
    toGo: "#vision",
    styleContainer: "p-5",
    styleText: "font-lato",
  },
  {
    title: "Creadores",
    toGo: "#creadores",
    styleContainer: "p-5",
    styleText: "text-neutral-600 font-lato",
  },
  {
    title: "Demo",
    toGo: "#demo",
    styleContainer: "p-5",
    styleText: "font-lato",
  },
  {
    title: "Contacto",
    toGo: "#contacto",
    styleContainer: "p-5",
    styleText: "font-lato",
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
      className="bg-[white] border-white top-0 left-0 h-[84px] border rounded grid grid-cols-3 place-content-around text-center m-0"
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

      <div
        id="navbar-menu3"
        className="flex justify-center items-center text-sm font-normal"
      >
        <Button
          title="Contactar Soporte"
          mode="secondary"
          styleExtras="px-[12px] mx-3 font-lato h-[36px] rounded-md"
        />
        <Button
          title="Comenzar ahora"
          mode="primary"
          styleExtras="px-[12px] h-[36px] font-bold font-lato rounded-md"
        />
      </div>
    </nav>
  );
};

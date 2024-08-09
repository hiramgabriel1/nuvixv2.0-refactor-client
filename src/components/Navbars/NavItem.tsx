import React from "react";
import { ShowComponent } from "../Utils/ShowComponent";

interface props {
  title: string;
  toGo: string;
  styleContainer: string;
  styleText?: string;
  children?: React.ReactNode;
}
/**
 * Componente que renderiza un item de la barra de navegación
 * @param title Título del item
 * @param toGo URL a la que se redirige
 * @param styleContainer Estilos del contenedor
 * @param styleText Estilos del texto
 * @param children Contenido del item
 * @returns Componente de item de la barra de navegación
 */
export const NavItem = ({ title, toGo, styleContainer, styleText, children }: props) => {
  const hadChildren = children ? true : false;
  return (
    <li className={styleContainer}>
      <ShowComponent isShowing={hadChildren}>{children}</ShowComponent>
      <a href={toGo} className={`text-sm font-normal ${styleText}`}> {title} </a>
    </li>
  );
};

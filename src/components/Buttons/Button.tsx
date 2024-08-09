import React from "react";
import { ShowComponent } from "../Utils/ShowComponent";
interface props {
  title: string;
  mode: "primary" | "secondary";
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  onClick?: () => void;
  styleExtras?: string;
}
export const Button = ({
  title,
  icon,
  iconPosition,
  onClick,
  mode,
  styleExtras,
}: props) => {
  const modeStyle =
    mode === "primary"
      ? "bg-emerald-500 text-white border"
      : "bg-transparent text-neutral-900 border";

  return (
    <button onClick={onClick} className={`${modeStyle} ${styleExtras}`}>
      <ShowComponent isShowing={iconPosition === "left"}>{icon}</ShowComponent>
      {title}
      <ShowComponent isShowing={iconPosition === "right"}>{icon}</ShowComponent>
    </button>
  );
};

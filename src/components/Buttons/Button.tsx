import React from "react";
import { ShowComponent } from "../Utils/ShowComponent";
interface props {
  title: string;
  mode: "primary" | "secondary" | "none";
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
      : "text-neutral-900 border";

  return (
    <button onClick={onClick} className={`${modeStyle} ${styleExtras}`}>
    <div className="flex items-center">
    <ShowComponent isShowing={iconPosition === "left"}><span className="mr-2">{icon}</span></ShowComponent>
      {title}
      <ShowComponent isShowing={iconPosition === "right"}><span className="mr-2">{icon}</span></ShowComponent>
    </div>
    </button>
  );
};

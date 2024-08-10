import React from "react";
import { ShowComponent } from "../Utils/ShowComponent";

interface Props {
  title: string;
  icon?: string;
  children: React.ReactNode;
  size: "sm" | "md" | "xl";
  extraStyles?: string;
}

export const Card = ({ title, icon, children, size, extraStyles }: Props) => {
  const hadIcon = icon ? true : false;
  return (
    <div
      className={`${extraStyles} w-[376px] h-[274px] border rounded border-[#0EA89BFF] p-8 border-solid border-b-4 flex flex-col justify-between`}
    >
      <ShowComponent isShowing={hadIcon}>{icon}</ShowComponent>
      <h1 className="font-bold text-xl text-left mb-5">{title}</h1>
      <div className="flex-1 text-center">{children}</div>
    </div>
  );
};

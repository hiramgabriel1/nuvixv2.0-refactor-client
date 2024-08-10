import React from "react";

interface props {
  width: number | string;
  height: number | string;
  children: React.ReactNode;
  background: string;
}
export const Container = ({ width, height, children, background }: props) => {
  return <div style={{ width, height, background }}>{children}</div>;
};

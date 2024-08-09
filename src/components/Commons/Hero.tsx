import React from "react";

interface props {
  styles: string;
  children: React.ReactNode;
}

export const Hero = ({ styles, children }: props) => {
  return <article className={styles}>{children}</article>;
};

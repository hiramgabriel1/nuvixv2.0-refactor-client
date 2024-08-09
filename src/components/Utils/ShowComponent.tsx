import React from 'react'
interface props {
    children: React.ReactNode;
    isShowing: boolean;
}
export const ShowComponent = ({children, isShowing}: props) => {

  return (
    <>
      {isShowing && children}
    </>
  )
}

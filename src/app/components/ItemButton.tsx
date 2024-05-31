import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";

type ButtonProps = {
  children: React.ReactNode;
}

export function ItemButton({children}:ButtonProps){
  return (
    <>
    <button className="flex items-center justify-between text-lg md:text-xl py-8 w-full" >
    {children}
    <FaArrowCircleRight className="-rotate-45 text-violet-500" />
    </button>
    <hr />
    </>
  )
}
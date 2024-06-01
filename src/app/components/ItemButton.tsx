import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/lib/auth';
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  URL: string
}

export async  function ItemButton({children , URL}:ButtonProps){


  return (
    <>
    <Link className="flex items-center justify-between text-lg md:text-xl py-8 w-full"  href={URL}>
    {children}
    <FaArrowCircleRight className="-rotate-45 text-violet-500" />
    </Link>
    <hr />
    </>
  )
}
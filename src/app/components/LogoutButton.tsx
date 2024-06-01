"use client"

import { signOut } from "next-auth/react"

export default function LogoutButton(){
  function handleClick(){
    signOut()
  }

  return (
    <button className=" bg-black text-white px-6 py-3 rounded-lg mx-auto" onClick={handleClick} >Logout</button>
  )
}
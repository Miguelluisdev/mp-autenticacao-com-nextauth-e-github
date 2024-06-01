"use client"
import { FaGithub } from "react-icons/fa"
import {signIn} from "next-auth/react"

export default function LoginButton(){
  function handleClick(){
    signIn("github")
  }
  return (
    <button className="mt-24 bg-black text-white px-6 py-3 flex items-center gap-3 rounded-lg mx-auto" onClick={handleClick}  >Login com Github <FaGithub/></button>
  )
}
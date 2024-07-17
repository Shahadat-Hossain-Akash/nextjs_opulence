'use client'
import React, { useState } from "react";
import { useAuthClient } from "../hooks/useAuthClient";
import { Input, Button } from "@nextui-org/react";

interface RegisterProps {
  register: {
    username: string;
    email: string;
    password: string;
  };
  setRegister: React.Dispatch<React.SetStateAction<{
    username: string;
    email: string;
    password: string;
  }>>;
  redirect: () => void
}

export default function Register() {
  const [register, setRegister] = useState({username: "", email: "", password: ""})
  const client = useAuthClient()

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      await client.register(register);
    } catch (error) {
      console.error("Registration Failed:", error);
    }
  }

  function handleChange(e:any) {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
    <form onSubmit={handleSubmit} className="max-w-3xl w-full flex gap-3 flex-col bg-[#1c1c1c] px-6 py-8 rounded-3xl backdrop-blur-md border-[1px] border-zinc-900/30">
      <span className="text-3xl mb-2">Create your account</span>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="username" className="text-sm">Username</label>
        <input className="py-3 px-2 rounded-lg bg-[#1a1a1a] outline-none placeholder-white/90" type="text" name="username" placeholder="Enter your username" />
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="email" className="text-sm">Email<sup className="ml-1">✱</sup></label>
        <input className="py-3 px-2 rounded-lg bg-[#1a1a1a] outline-none placeholder-white/90" type="email" name="email" placeholder="Enter your email" />
      </div>
      <div className="flex flex-col w-full gap-2">
        <label htmlFor="password" className="text-sm">Password<sup className="ml-1">✱</sup></label>
        <input className="py-3 px-2 rounded-lg bg-[#1a1a1a] outline-none placeholder-white/90" type="password" name="password" placeholder="Enter your password" />
      </div>
      <button type="submit" className=" bg-[#0096EA] rounded-lg p-3 outline-none w-full">submit</button>
    </form>
    </div>
  );
}
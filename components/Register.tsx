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
    <form onSubmit={handleSubmit} className="max-w-3xl w-full flex gap-4 flex-col bg-zinc-700/05 px-6 py-8 rounded-3xl backdrop-blur-md border-[1px] border-zinc-900/30 bg-custom-modal">
    <span className="text-5xl mb-2">Register Now</span>
      <Input
        type="text"
        value={register.username}
        name="username"
        onChange={handleChange}
        required
        placeholder="username"
        label="Name"
        labelPlacement="outside"
        variant="underlined"
      />
      <Input
        type="email"
        value={register.email}
        name="email"
        onChange={handleChange}
        required
        placeholder="email"
        label="Email"
        labelPlacement="outside"
        variant="underlined"
      />
      <Input
        type="password"
        value={register.password}
        name="password"
        onChange={handleChange}
        required
        placeholder="password"
        label="Password"
        labelPlacement="outside"
        variant="underlined"
      />
      <Button type="submit" className=" mt-2" variant="shadow" color="primary">submit</Button>
    </form>
    </div>
  );
}
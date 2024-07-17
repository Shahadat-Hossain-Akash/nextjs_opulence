'use client'
import React, { useEffect, useState } from "react";
import { useAuthClient } from "../hooks/useAuthClient";;
import axios from "axios";
import { Input, Button } from "@nextui-org/react";

interface LoginProps {
     readonly login: {
       email: string;
       password: string;
    };
     readonly setLogin: React.Dispatch<React.SetStateAction<{
       email: string;
       password: string;
    }>>;
    readonly setUser: React.Dispatch<React.SetStateAction<{
      email: string;
      password: string;
   }>>;
  }

export default function Login() {
  const [login, setLogin] = useState({email: "", password: ""})
  const client = useAuthClient()

  const [token, setToken] = useState<string | null>(null);

  //http://127.0.0.1:8000/v1/csrf

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('http://localhost:8000/v1/csrf');
        const csrfToken = response?.headers?.['x-csrftoken'];
        if (csrfToken !== undefined) {
          setToken(csrfToken);
        } else {
          console.error('CSRF token not found in headers:', csrfToken);
        }
      } catch (error) {
        console.error('Error fetching CSRF token:', error);
      }
    }
    
    fetchData();
  }, []);


  async function handleSubmit(e:any) {
    e.preventDefault();
    try {
      const res = await client.login(login);
    } catch (error) {
      console.error("Login Failed:", error);
    }
  }

  function handleChange(e:any) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
    <form onSubmit={handleSubmit} className="max-w-3xl w-full flex gap-3 flex-col bg-[#1c1c1c] px-6 py-8 rounded-3xl backdrop-blur-md border-[1px] border-zinc-900/30">
      <span className="text-3xl mb-2">Sign in to your account</span>
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
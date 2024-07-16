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

  console.log(token);


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
    <form onSubmit={handleSubmit} className="max-w-3xl w-full flex gap-4 flex-col bg-zinc-700/05 px-6 py-8 rounded-3xl backdrop-blur-md border-[1px] border-zinc-900/30 bg-custom-modal">
      <span className="text-5xl mb-2">Log in</span>
      <Input
        type="email"
        value={login.email}
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
        value={login.password}
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
'use client'
import React, { useState } from "react";
import { useAuthClient } from "../hooks/useAuthClient";

export function RegisterForm({}) {
  const [register, setRegister] = useState({
    username: "",
    email: "",
    password: "",
  });
  const client = useAuthClient();

  async function handleSubmit(e:any) {
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
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        value={register.username}
        name="username"
        onChange={handleChange}
        required
        placeholder="username"
      />
      <input
        type="email"
        value={register.email}
        name="email"
        onChange={handleChange}
        required
        placeholder="email"
      />
      <input
        type="password"
        value={register.password}
        name="password"
        onChange={handleChange}
        required
        placeholder="password"
      />
      <button type="submit">submit</button>
    </form>
  );
}
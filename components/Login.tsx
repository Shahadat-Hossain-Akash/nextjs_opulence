'use client'
import React, { useState } from "react";
import { useAuthClient } from "../hooks/useAuthClient";

export function LoginForm({  }) {
  const [login, setLogin] = useState({ email: "", password: "" });
  const client = useAuthClient();

  async function handleSubmit(e:any) {
    e.preventDefault();
    try {
      await client.login(login);

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
    <form onSubmit={handleSubmit} className="form">
      <input
        type="email"
        value={login.email}
        name="email"
        onChange={handleChange}
        required
        placeholder="email"
      />
      <input
        type="password"
        value={login.password}
        name="password"
        onChange={handleChange}
        required
        placeholder="password"
      />
      <button type="submit">submit</button>
    </form>
  );
}
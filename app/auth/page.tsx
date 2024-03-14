"use client";
import React, { useState } from "react";
import axios from "axios";


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

const client = axios.create({
  baseURL: 'https://django-opulence.vercel.app/',
})

export default function Auth() {
  const [register, setRegister] = useState({username: "", email: "", password: ""});
  const [login, setLogin] = useState({email: "", password: ""});
  const [isRegister, setIsRegister] = useState(true)
  const [current, setCurrent] = useState(false)

  

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    if (isRegister) {
      setRegister({
        ...register,
        [e.target.name]: e.target.value,
      });
    } else {
      setLogin({
        ...login,
        [e.target.name]: e.target.value,
      });
    }
  }

  function clearFormFields() {
    setRegister({ username: "", email: "", password: "" });
    setLogin({ email: "", password: "" });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  
    let formData = new FormData();
  
    if (isRegister) {
      for (let [key, value] of Object.entries(register)) {
        formData.append(key, value);
      }
      try {
        await client.post('v1/register/', formData);
        await client.post('v1/login/', {
          email: register.email,
          password: register.password,
        });
        setCurrent(!current);
      } catch (error) {
        console.error("Registration and Login Failed:", error);
      }
    } else {
      for (let [key, value] of Object.entries(login)) {
        formData.append(key, value);
      }
      try {
        await client.post('v1/login/', formData);
        setCurrent(!current);
      } catch (error) {
        console.error("Login Failed:", error);
      }
    }
  }
  
  return (
    <div className="w-full min-h-screen ">
      <div>{current ? "user": 'you are not login'}</div>
      <button onClick={() => {setIsRegister(!isRegister); clearFormFields() }}>{isRegister ? 'register': 'Login'}</button>
      {
        isRegister ? (
          <form
      action=""
      onSubmit={handleSubmit}
      className="w-full h-full flex flex-col gap-3 p-8 text-fuchsia-500"
    >
      {" "}
      <input
        type="text"
        value={register.username}
        name="username"
        onChange={handleChange}
        required
        placeholder="username" />{" "}
      <input
        type="email"
        value={register.email}
        name="email"
        onChange={handleChange}
        required
        placeholder="email" />{" "}
      <input
        type="password"
        value={register.password}
        name="password"
        onChange={handleChange}
        required
        placeholder="password" />{" "}
      <button type="submit"> submit</button>
    </form>
        ) : (<form
          action=""
          onSubmit={handleSubmit}
          className="w-full h-full flex flex-col gap-3 p-8 text-fuchsia-500"
        >
          {" "}
          <input
            type="email"
            value={login.email}
            name="email"
            onChange={handleChange}
            required
            placeholder="email" />{" "}
          <input
            type="password"
            value={login.password}
            name="password"
            onChange={handleChange}
            required
            placeholder="password" />{" "}
          <button type="submit"> submit</button>
        </form>)
      }
    </div>
  );

}

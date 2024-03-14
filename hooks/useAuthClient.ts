import React from 'react'
import axios from "axios";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true

export function useAuthClient() {
    const client = axios.create({
        baseURL: 'https://django-opulence.vercel.app/'
    })

    const login = async ({email, password}: {email:string, password: string}) => {
        try {
            const res = await client.post('v1/login/', {
                email,
                password
            })
            return res.data
        } catch (error) {
            throw new Error('Registration Failed')
        }
    }
    const register = async ({username, email, password}: {username: string, email:string, password: string}) => {
        try {
            const res = await client.post('v1/register/', {
                username,
                email,
                password
            })
            return res.data
        } catch (error) {
            throw new Error('Login Failed')
        }
    }

    return {login, register}
}

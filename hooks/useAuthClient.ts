import axios from "axios";
import Cookies from 'js-cookie'


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken'
axios.defaults.withCredentials = true


//https://django-opulence.vercel.app
const client = axios.create({
    baseURL: 'http://localhost:8000/v1/csrf'
})

export function useAuthClient() {

    const conf: any = {
        headers: {
            'X-CSRFToken': Cookies.get('csrftoken'),
        }
    }
    console.log(Cookies.get('csrftoken')+"csrf token here");
    const login = async ({ email, password }: { email: string, password: string }) => {
        try {
            const res = await client.post('/v1/login/', {
                email,
                password
            }, conf)
            console.log(res);
            return res.data;
        } catch (error) {
            throw new Error('Login Failed')
        }
    }
    const register = async ({ username, email, password }: { username: string, email: string, password: string }) => {
        try {
            const res = await client.post('/v1/register/', {
                username,
                email,
                password
            })
            return res.data
        } catch (error: any) {
            throw new Error(error.response.data.detail)
        }
    }
    const logout = async () => {
        try {
            const res = await client.post('/v1/logout/', {}, 
            )
            console.log(Cookies.get('csrftoken'));
            console.log(res);
        } catch (error: any) {
            throw new Error(error.response.data.detail)
        }
    }

    return { login, register, logout }
}

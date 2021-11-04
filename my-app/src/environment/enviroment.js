import axios from 'axios'

// baseURL
export const API = axios.create({
    baseURL: `https://api.github.com/`
})
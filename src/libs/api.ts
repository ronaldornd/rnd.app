import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://rnd-app.up.railway.app/'
})
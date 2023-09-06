import axios from 'axios'

export const SERVER_URL: string = 'http://localhost:5500'
export const API_URL: string = `${SERVER_URL}/api`

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    return config
})

export default $api
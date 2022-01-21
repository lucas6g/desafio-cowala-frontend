import axios from 'axios'

export const fastIp = axios.create({
    baseURL: 'https://ip-fast.com/api/ip'
})
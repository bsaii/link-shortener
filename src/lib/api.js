import axios from 'axios'

export const API = axios.create({
  baseURL: 'https://api-ssl.bitly.com/v4',
  headers: { Authorization: `Bearer ${process.env.REACT_APP_TOKEN}` },
})

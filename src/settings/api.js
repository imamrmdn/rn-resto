import axios from 'axios'
import { API_KEY, BASE_URL } from './utils'

export default axios.create({

    baseURL: BASE_URL,
    headers: {
        Authorization: `Bearer ${API_KEY}`
    }

})
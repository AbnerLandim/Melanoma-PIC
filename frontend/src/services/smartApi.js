import axios from 'axios';

const smartApi = axios.create({
    baseURL: 'http://localhost:5000',
})

export default smartApi;
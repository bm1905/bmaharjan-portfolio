import axios from 'axios';

const trackerApi = axios.create({
    baseURL: '/api/v1'
});

export default trackerApi;
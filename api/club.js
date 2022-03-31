import axios from 'axios';

export default axios.create({
    //baseURL: 'http://localhost:5000/clubs'
    baseURL: 'http://192.168.0.120:5000/clubs'
});

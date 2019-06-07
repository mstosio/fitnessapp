import axios from 'axios';


const APP_ID = '1884f1a3';
const APP_KEY = 'a26c260a68e8bd840e277eac7d108488';

export default axios.create({
    baseURL: 'https://api.edamam.com',
    params: {
        app_id: '1884f1a3',
        app_key: 'a26c260a68e8bd840e277eac7d108488'
    }
});
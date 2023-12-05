import axios from 'axios';

class apiService {

    constructor() {
        this.url = 'http://localhost:3000/api';
    }

    async get(endpoint) {
        const response = await axios(`${this.url}/${endpoint}`);
        const data = await response.json();
        return data;
    }

    async post(endpoint, data) {
        const response = await axios.post(`${this.url}/${endpoint}`, data);
        const responseData = await response.json();
        return responseData;
    }

}

export default new apiService();
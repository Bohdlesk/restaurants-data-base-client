import axios from 'axios';

export default axios.create({
    baseURL: "https://restaurants-database.herokuapp.com/api/v1/restaurants"
});
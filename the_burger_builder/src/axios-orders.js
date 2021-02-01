import axios from 'axios';
const instance = axios.create({
    baseURL:'https://todo-flutter-8a80f.firebaseio.com/'
})
export default instance;
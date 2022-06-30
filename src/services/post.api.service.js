import axios from "axios";

let axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/posts'
});

const getPosts = ()=> axiosInstance.get('').then(value => value);

const getPost = (id) => axiosInstance.get('/' + id).then(value => value.data)

const getPostComments = (id) => axiosInstance.get('/' + id + '/comments').then(value => value);

export {getPost,getPosts,getPostComments};
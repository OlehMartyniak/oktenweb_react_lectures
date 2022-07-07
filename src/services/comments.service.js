import axios from "axios";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/comments'
})


const createComment = (post)=> axiosInstance.post('',post);

export {createComment};
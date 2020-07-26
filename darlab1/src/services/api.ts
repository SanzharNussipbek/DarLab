import axios from "axios"
import { Post } from "../types/Intefaces"

export const getPosts = () => {
    return axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
}

export const getPost = (id: number) => {
    return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.data)
}
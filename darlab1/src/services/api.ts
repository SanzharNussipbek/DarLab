import axios from "axios"
import { Post, Video } from "../types/Interfaces"
import { videosMock } from "./mock"

export const getPosts = () => {
    return axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.data)
}

export const getPost = (id: number) => {
    return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(response => response.data)
}

export const getVideos = () => {
    return new Promise<Video[]>((resolve, reject) => {
        resolve(videosMock);
    })
}
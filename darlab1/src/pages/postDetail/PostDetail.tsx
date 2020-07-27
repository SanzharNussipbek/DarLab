import React, { useState, useEffect } from 'react';
import { useParams } from "react-router"
import './PostDetail.scss';
import { Post } from "../../types/Intefaces"
import { getPost } from '../../services/api';
import { Link } from "react-router-dom"

export const PostDetail: React.FunctionComponent = () => {

    const [post, setPost] = useState<Post>()
    let {id} = useParams()
    id = parseInt(id, 10)

    useEffect(() => {
        getPost(id)
            .then(data => setPost(data))
    }, []);

    return (
        <div className="Post">
            <h3 className="post-title">{post?.title}</h3>
            <hr></hr>
            <div className="post-body">{post?.body}</div>
            <Link to="/posts">Go Back</Link>
        </div>
    );
}
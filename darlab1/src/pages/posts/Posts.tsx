import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link} from "react-router-dom"
import './Posts.scss';
import { Post } from "../../types/Interfaces"
import { getPosts } from '../../services/api';

export const Posts: React.FunctionComponent = () => {

    const [posts, setPosts] = useState<Post[]>([])

    useEffect(() => {
        getPosts()
            .then(data => setPosts(data))
    }, []);

    return (
        <div className="Posts">
            <div className="posts-list">
                {
                    posts.map((post, index) => (
                        <div className="posts-item" key={index}>
                            <h3><Link to={`/posts/${post.id}`}>{post.title}</Link></h3>
                            <div className="posts-item-text">{post.body}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
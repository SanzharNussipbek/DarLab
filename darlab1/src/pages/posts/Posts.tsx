import React, { useState, useEffect } from 'react';
import './Posts.scss';
import { Post } from "../../types/Intefaces"
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
                    posts.map(post => (
                        <div className="posts-item">
                            <h3>{post.title}</h3>
                            <div className="posts-item-text">{post.body}</div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
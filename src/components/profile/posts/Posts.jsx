import React from 'react';
import Post from './post/Post';
import css from './Posts.module.css';

const Posts = () => {

    let postsData = [
        { id: 1, post: "hi, mate" },
        { id: 2, post: "hello world" },
        { id: 3, post: "gj man" },
        { id: 4, post: "first" },
        { id: 5, post: "Andrew" }
    ];

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={css.posts}>
                posts
                <Post message={postsData[0].post}></Post>
            </div>
        </div>
    );
}

export default Posts;
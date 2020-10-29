import React from 'react';
import Post from './post/Post';
import css from './Posts.module.css';

const Posts = () => {
    return (
        <div>
            my posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={css.posts}>
                posts
                <Post message='hi, mate'></Post>
                <Post message='hello world'></Post>
                <Post message='gj man'></Post>
                <Post message='first'></Post>
            </div>
        </div>
    );
}

export default Posts;
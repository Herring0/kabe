import React from 'react';
import Post from './post/Post';
import css from './Posts.module.css';

const Posts = (props) => {

    let postsComponents = [
        props.postsData.map(postData => <Post message={postData.post}/>)
    ]

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
                {postsComponents}
            </div>
        </div>
    );
}

export default Posts;
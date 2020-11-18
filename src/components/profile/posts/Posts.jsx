import React from 'react';
import Post from './post/Post';
import css from './Posts.module.css';

const Posts = (props) => {

    let postsComponents = [
        props.postsData.map(postData => <Post message={postData.post}/>)
    ]

    let newPostArea = React.createRef();

    let addPost = () => {
        let newPostText = newPostArea.current.value;
        props.addPost(newPostText);
        newPostArea.current.value = ''
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostArea}/>
                </div>
                <div>
                    <button onClick={addPost}>
                        Add post
                    </button>
                </div>
            </div>
            <div className={css.posts}>
                {postsComponents}
            </div>
        </div>
    );
}

export default Posts;
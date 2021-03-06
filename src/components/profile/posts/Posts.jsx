import React from 'react';
import Post from './post/Post';
import css from './Posts.module.css';
import {addPostActionCreator, onPostChangeActionCreator} from "../../../redux/profile-reducer";

const Posts = (props) => {

    let postsComponents = [
        props.postsData.map(postData => <Post message={postData.post}/>)
    ]

    let newPostArea = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let newText = newPostArea.current.value;
        let action = onPostChangeActionCreator(newText);
        props.dispatch(action);
    }

    return (
        <div className={css.postsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostArea} value={props.newPostText}/>
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
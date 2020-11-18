import React from 'react';
import css from './Post.module.css';

const Post = (props) => {
    return (
        <div className={css.item}>
            <img src='https://i2-prod.mirror.co.uk/incoming/article20422987.ece/ALTERNATES/s1200c/2_Poirot-The-Theft-of-the-Royal-Ruby-TV-Programme-1991dca.jpg' alt="img"></img>
            <span className={css.postText}>{props.message}</span>
        </div>
    );
}

export default Post;
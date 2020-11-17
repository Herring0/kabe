import React from 'react';
import css from './Message.module.css';

const Message = (props) => {
    console.log(props.from);
    return <div className={`${css.message} ${(props.from === -1 ? css.mine : css.other)}`}><span>{props.message}</span></div>
}

export default Message;
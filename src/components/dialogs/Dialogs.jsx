import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Dialogs.module.css';

const Dialog = (props) => {

    let url = "/dialogs/" + props.id;

    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={url}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={css.message}>{props.message}</div>
    );
}


const Dialogs = (props) => {

    let dialogsData = [
        { id: 1, name: "Max" },
        { id: 2, name: "Alex" },
        { id: 3, name: "John" },
        { id: 4, name: "Stuart" },
        { id: 5, name: "Andrew" }
    ];

    let messagesData = [
        { id: 1, message: "Hi" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Yo" }
    ]

    return (
        <div className={css.dialogs_wrapper}>
            <div className={css.dialogs_items}>
                <Dialog name={dialogsData[0].name} id={dialogsData[0].id} />
            </div>
            <div className={css.messages}>
                <Message message={messagesData[0].message} />
            </div>
        </div>
    );
}

export default Dialogs;
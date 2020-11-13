import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Dialog.module.css';

const Dialog = (props) => {

    let url = "/dialogs/" + props.id;

    return (
        <div className={css.dialog + ' ' + css.active}>
            <NavLink to={url}>{props.name}</NavLink>
        </div>
    );
}

export default Dialog;
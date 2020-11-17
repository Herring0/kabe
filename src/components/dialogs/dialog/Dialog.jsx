import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Dialog.module.css';

const Dialog = (props) => {

    let url = "/dialogs/" + props.id;

    return (
        <NavLink className={css.link} to={url} activeClassName={css.active}>{props.name}</NavLink>
    );
}

export default Dialog;
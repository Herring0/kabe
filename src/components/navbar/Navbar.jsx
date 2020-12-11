import React from 'react';
import {NavLink} from 'react-router-dom';
import css from './Navbar.module.css';
import '../../App.css';
import Message from "../dialogs/message/Message";
import Friend from "./friend/Friend";

const Navbar = (props) => {

    let friendsComponents =
        props.sidebarState.friendsData.map(friendData =>
            <Friend friendData={friendData}></Friend>
        )

    return (
        <nav className={`${css.nav} wrapper`}>
            <div className="navigation">
                <div className={css.item}>
                    <NavLink to="/profile" activeClassName={css.active}>Profile</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/dialogs" activeClassName={css.active}>Messages</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/news" activeClassName={css.active}>News</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/music" activeClassName={css.active}>Music</NavLink>
                </div>
                <div className={css.item}>
                    <NavLink to="/settings" activeClassName={css.active}>Settings</NavLink>
                </div>
            </div>
            <div className={css.friends_block}>
                <span className={css.title}>Friends:</span>
                <div className={css.friends}>
                    {friendsComponents}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
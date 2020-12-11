import css from "./Friend.module.css";
import React from "react";

const Friend = (props) => {
    return (
        <div className={css.friend_wrapper}>
            <a href={"/user/" + props.friendData.id}>
                <div className={css.friend + " " + css.item}>
                    <img src={props.friendData.imgPath} alt="123"/>
                    <span className="name">{props.friendData.name}</span>
                </div>
            </a>
        </div>
    )
}

export default Friend
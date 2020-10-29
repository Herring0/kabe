import React from 'react';
import Posts from './posts/Posts';
import classes from './Profile.module.css';

const Profile = () => {
    return (
        <div>
            <div>
                avatar + description
            </div>
            <Posts></Posts>
        </div>
    );
}

export default Profile;
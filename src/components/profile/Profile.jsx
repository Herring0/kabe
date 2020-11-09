import React from 'react';
import Posts from './posts/Posts';
import classes from './Profile.module.css';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = () => {
    return (
        <div>
            <ProfileInfo />
            
            <Posts></Posts>
        </div>
    );
}

export default Profile;
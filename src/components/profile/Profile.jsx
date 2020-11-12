import React from 'react';
import Posts from './posts/Posts';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts postsData={props.profileState.postsData}></Posts>
        </div>
    );
}

export default Profile;
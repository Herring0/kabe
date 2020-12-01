import React from 'react';
import Posts from './posts/Posts';
import ProfileInfo from './profileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts postsData={props.profilePage.postsData}
                   newPostText={props.profilePage.newPostText}
                   dispatch={props.dispatch} />
        </div>
    );
}

export default Profile;
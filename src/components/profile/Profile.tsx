import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/State";

type ProfileType = {
    state: ProfilePageType
}
const Profile = (props: ProfileType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostsData = {props.state.myPostsData}/>
        </div>
    );
};

export default Profile;
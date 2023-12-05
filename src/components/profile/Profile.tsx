import React from 'react';
import classes from './Profile.module.css'
import MyPosts from "./myPosts/MyPosts";
import {ProfileInfo} from "./profileInfo/ProfileInfo";
import {TypeAppMyPostsDataProps} from "../../App";

type TypeDialogsProps = {
    myPostsData: Array<TypeAppMyPostsDataProps>
}

const Profile = (props: TypeDialogsProps) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts myPostsData = {props.myPostsData}/>
        </div>
    );
};

export default Profile;
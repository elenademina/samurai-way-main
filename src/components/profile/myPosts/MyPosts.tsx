import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./post/Post";
import {ProfilePageType} from "../../../redux/State";

const MyPosts = (props: ProfilePageType) => {

    return (
        <div className={classes.myPostsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea></textarea>
            </div>
            <div>
                <button>new post</button>
            </div>

            <div className={classes.posts}>
                {props.myPostsData.map(post => (<Post message={post.text}/>))
                }
            </div>
        </div>
    );
};

export default MyPosts;
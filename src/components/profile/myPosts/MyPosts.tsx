import React from 'react';
import classes from './MyPosts.module.css'
import Post from "./post/Post";

const MyPosts = () => {

    let myPostsData = [
        {text: "Hi, how are you?"},
        {text: "It's my first post."}
    ]

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
                {myPostsData.map(post => (<Post message={post.text}/>))
                }
            </div>
        </div>
    );
};

export default MyPosts;
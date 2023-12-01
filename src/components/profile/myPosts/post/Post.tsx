import React from 'react';
import classes from './Post.module.css'

type TypePost = {
    message: string
}


const Post = (props: TypePost) => {
    return (
        <div className={classes.item}>{props.message}</div>
    );
};

export default Post;
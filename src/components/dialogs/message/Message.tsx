import React from 'react';
import classes from "./Message.module.css";

type TypeMessageProps = {
    text: string
}

export const Message = (props: TypeMessageProps) => {
    return (
        <div className={classes.message}>{props.text}</div>
    );
};

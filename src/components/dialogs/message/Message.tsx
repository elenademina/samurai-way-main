import React from 'react';
import classes from "./Message.module.css";
import {MessageType} from "../../../redux/State";

export const Message = (props: MessageType) => {
    return (
        <div className={classes.message}>{props.text}</div>
    );
};

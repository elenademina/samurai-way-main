import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";

const Dialogs = () => {

    let dialogsData = [
        {id: 1, nameuser: "Dimych"},
        {id: 2, nameuser: "Andrey"},
        {id: 3, nameuser: "Valera"}
    ]

    let messagesData = [
        {id: 1, text: "Hi!"},
        {id: 2, text: "How are you?"},
        {id: 3, text: "Yo!"}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsData.map((user) => {
                    return (
                        <DialogItem id={user.id} nameUser={user.nameuser}/>
                    )
                })}
            </div>
            <div className={classes.messages}>
                {messagesData.map((message) => {
                    return (
                        <Message text={message.text}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Dialogs;
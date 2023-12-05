import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {TypeAppDialogsDataProps, TypeAppMessagesDataProps} from "../../App";

type TypeDialogsProps = {
    dialogsData: Array<TypeAppDialogsDataProps>
    messagesData: Array<TypeAppMessagesDataProps>
}

const Dialogs = (props: TypeDialogsProps) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogsData.map((user) => {
                    return (
                        <DialogItem id={user.id} nameUser={user.nameuser}/>
                    )
                })}
            </div>
            <div className={classes.messages}>
                {props.messagesData.map((message) => {
                    return (
                        <Message text={message.text}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Dialogs;
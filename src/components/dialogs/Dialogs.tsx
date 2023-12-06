import React from 'react';
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./dialogItem/DialogItem";
import {Message} from "./message/Message";
import {DialogsPageType} from "../../redux/State";

type DialogsType = {
    state: DialogsPageType
}
const Dialogs = (props: DialogsType) => {

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.state.dialogsData.map((user) => {
                    return (
                        <DialogItem id={user.id} nameUser={user.nameuser}/>
                    )
                })}
            </div>
            <div className={classes.messages}>
                {props.state.messagesData.map((message) => {
                    return (
                        <Message text={message.text}/>
                    )
                })}
            </div>
        </div>
    );
};

export default Dialogs;
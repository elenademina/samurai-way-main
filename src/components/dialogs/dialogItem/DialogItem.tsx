import React from 'react';
import classes from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

type TypeDialogItemProps = {
    id: number
    nameUser: string
}

export const DialogItem = (props: TypeDialogItemProps) => {
    let pathTo = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog}>
            <NavLink to={pathTo} activeClassName={classes.activeLink}> {props.nameUser} </NavLink>
        </div>
    );
};
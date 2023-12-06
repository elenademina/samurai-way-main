import React from 'react';
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {SidebarType} from "../../redux/State";

type NavbarType = {
    state: SidebarType
}
const Navbar = (props: NavbarType) => {
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={"/profile"} activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to={"/dialogs"} activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/news"} activeClassName={classes.activeLink}>News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/music"} activeClassName={classes.activeLink}>Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={"/settings"} activeClassName={classes.activeLink}>Settings</NavLink>
            </div>
            <div className={classes.friends}>
                FRIENDS
                <div>
                    {props.state.friends.map((f)=>{
                        return (
                            f.nameFriend
                        )
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
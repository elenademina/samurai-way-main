import React from 'react';
import './App.css';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import Dialogs from "./components/dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "./components/music/Music";
import News from "./components/news/News";
import Settings from "./components/settings/Settings";

export type TypeAppDialogsDataProps = {
    id: number
    nameuser: string
}

export type TypeAppMessagesDataProps = {
    id: number
    text: string
}

export type TypeAppMyPostsDataProps = {
    text: string
}

type TypeAppProps = {
    dialogsData: Array<TypeAppDialogsDataProps>
    messagesData: Array<TypeAppMessagesDataProps>
    myPostsData: Array<TypeAppMyPostsDataProps>
}

const App = (props: TypeAppProps) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    {/*<Route path={'/dialogs'} component={Dialogs}/>
                    <Route path={'/profile'} component={Profile}/>*/}
                    <Route path={'/dialogs'} render={ () => <Dialogs dialogsData = {props.dialogsData} messagesData = {props.messagesData}/> }/>
                    <Route path={'/profile'} render={ () => <Profile myPostsData = {props.myPostsData}/> }/>

                    <Route path={'/music'} component={Music}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/settings'} component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

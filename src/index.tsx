import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

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

let myPostsData = [
    {text: "Hi, how are you?"},
    {text: "It's my first post."}
]

ReactDOM.render(
    <App dialogsData = {dialogsData} messagesData = {messagesData} myPostsData = {myPostsData}/>,
  document.getElementById('root')
);
export type FriendsType = {
    id: number
    nameFriend: string
}
export type MessageType = {
    text: string
}
export type DialogType = {
    id: number
    nameuser: string
}
export type PostType = {
    text: string
}
export type ProfilePageType = {
    myPostsData: Array<PostType>
}
export type DialogsPageType = {
    dialogsData: Array<DialogType>
    messagesData: Array<MessageType>
}
export type SidebarType = {
    friends: Array<FriendsType>
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}


let state: RootStateType = {
    profilePage: {
        myPostsData: [
            {text: "Hi, how are you?"},
            {text: "It's my first post."}
        ]
    },
    dialogsPage: {
        dialogsData: [
            {id: 1, nameuser: "Dimych"},
            {id: 2, nameuser: "Andrey"},
            {id: 3, nameuser: "Valera"}
        ],
        messagesData: [
            {text: "Hi!"},
            {text: "How are you?"},
            {text: "Yo!"}
        ],
    },
    sidebar: {
        friends: [
            {id: 1, nameFriend: "Andrew"},
            {id: 2, nameFriend: "Sasha"},
            {id: 3, nameFriend: "Sveta"},
        ]
    }
}

export default state;
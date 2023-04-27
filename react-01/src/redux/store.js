import Post from "../components/Profile/MyPosts/Post/Post";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sideBarReducer from "./sideBar-reducer";



let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 0, message: 'Hi, how r u?', likeCount: '15'},
                {id: 1, message: 'It\'s my first post', likeCount: '20'},
                {id: 2, message: 'It\'s my first post', likeCount: '20'},
            ],
            newPostText: 'helloooooo',

        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: 'Nick'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Den'},
                {id: 4, name: 'Dima'},
                {id: 5, name: 'Vasily'},
            ],
            messages: [
                {id: 0, message: 'Yo'},
                {id: 1, message: 'Hello'},
                {id: 2, message: 'How r u'},
            ],
            newMessageBody: '',


        },
        sideBar: {
            friends: [
                {id: 0, name: 'Nick'},
                {id: 1, name: 'Gio'},
                {id: 2, name: 'Sveta'},
            ]
        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('State')
    },

    subscribe(observer) {
        this._callSubscriber = observer
    },

    dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sideBar = sideBarReducer(this._state.sideBar, action);

    this._callSubscriber(this._state)
    }
}






export default store;
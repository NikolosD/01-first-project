const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    posts: [
        {id: 0, message: 'Hi, how r u?', likeCount: '15'},
        {id: 1, message: 'It\'s my first post', likeCount: '20'},
        {id: 2, message: 'It\'s my first post', likeCount: '20'},
    ],
    newPostText: 'helloooooo',
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likeCount: 0
            };
            let stateCopy = {
                ...state,
                posts:[...state.posts, newPost],
                newPostText : '',
            };

            return stateCopy
        case UPDATE_NEW_POST_TEXT:{
            return{
                ...state,
                newPostText: action.newText,
            };
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: text}
}


export default profileReducer;
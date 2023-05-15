const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
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

}
const dialogsReducer = (state = initialState, action) => {


    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
         return {
                ...state,
                newMessageBody: action.body
            };
        case SEND_MESSAGE:
            let body = state.newMessageBody;
           return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages,{id: 6, message: body}]
            };
        default:
            return state;
    }
}


export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}

export default dialogsReducer;
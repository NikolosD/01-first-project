const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    users: [
        {
            id: 1,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            followed: true,
            fullName: 'Gio',
            status: 'I am a boss too',
            location: {city: 'Tbilisi', country: 'Georgia'}
        },
        {
            id: 3,
            followed: false,
            fullName: 'Andrew',
            status: 'I am a boss guyz',
            location: {city: 'Kiev', country: 'Ukraine'}
        },

    ],
    newPostText: 'helloooooo',
}
const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u =>{
                    if(u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u =>{
                    if(u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})

export default usersReducer;
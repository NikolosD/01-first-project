const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'

let photoSil = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7_Eyt7t8PHkyxWclmd5JJboKluSFQpgLJEw&usqp=CAU";

let initialState = {
    users: [
        {
            id: 1,
            photoUrl:photoSil,
            followed: false,
            fullName: 'Dmitry',
            status: 'I am a boss',
            location: {city: 'Minsk', country: 'Belarus'}
        },
        {
            id: 2,
            photoUrl:photoSil,
            followed: true,
            fullName: 'Gio',
            status: 'I am a boss too',
            location: {city: 'Tbilisi', country: 'Georgia'}
        },
        {
            id: 3,
            photoUrl:photoSil,
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
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                // users: [...state.users],
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state, users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });

export const setUsersAC = (users) => ({
    type: SET_USERS, users
})

export default usersReducer;

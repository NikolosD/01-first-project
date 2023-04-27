import React from "react";
import s from './Friend.module.css';
import FriendItem from "./FriendItem/FriendItem";


const Friend = (props) => {
    let friendsElement = props.state.friends.map(friend => <FriendItem name={friend.name} id={friend.id}/> );
    return (
        <div>
            {friendsElement}
        </div>
    );
}

export default Friend;
import React from "react";
import s from './FriendItem.module.css';

const FriendItem = (props) => {
    return (
        <div className={s.friend}>
            <div className={s.name}>
                {props.name}
            </div>
            <div className={s.avatar}>
                <img src="https://icon-library.com/images/online-status-icon/online-status-icon-11.jpg" alt="Avatar"/>
            </div>

        </div>
    );
}

export default FriendItem;
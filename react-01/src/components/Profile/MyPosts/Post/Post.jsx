import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
  return (
    <div className={s.item}>
      <img
        src="https://i.pinimg.com/474x/76/4d/59/764d59d32f61f0f91dec8c442ab052c5.jpg"
        alt="no picture here"
      />
      {props.message}
      <div>
        <span>Like : {props.likeCount}</span>
      </div>
    </div>
  );
};

export default Post;

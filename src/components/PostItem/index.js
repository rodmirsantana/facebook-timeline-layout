import React from 'react';

import './styles.css';

import CommentItem from '../CommentItem';

function PostItem({ data }) {
  return (
    <li className="post-item">
      <div className="info">
        <img src={data.author.avatar} className="avatar" alt="author-avatar" />
        <div>
          <p className="title">{data.author.name}</p>
          <small className="date">{data.date}</small>
        </div>
      </div>
      <div className="post-text">{data.content}</div>
      <ul className="comments">
        {data.comments.map(comment => (
          <CommentItem data={comment} />
        ))}
      </ul>
    </li>
  );
}

export default PostItem;

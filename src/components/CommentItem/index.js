import React from 'react';

import './styles.css';

function CommentItem({ data }) {
  return (
    <div className="comment-list">
      <div className="author">
        <img src={data.author.avatar} className="avatar" alt="author-avatar" />
      </div>
      <div className="content">
        <p className="title">{data.author.name}</p>
        <small className="date">{data.date}</small>
        <div className="comment-text">{data.content}</div>
      </div>
    </div>
  );
}

export default CommentItem;

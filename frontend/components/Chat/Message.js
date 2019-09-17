import React from 'react';

const Message = ({ message }) =>
  <li key={message.id} className={message.side}>
    <img src={message.authorImg} />
    <p>{message.body}</p>
  </li>;

export default Message;
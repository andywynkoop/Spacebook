import React from 'react';

export default ({ message, version }) => (
  <div className="comment-modal-btn-container">
    <button className="comment-modal-btn">···</button>
    <div className={`comment-modal-btn-modal ${version}`}>
      <div className="black-triangle" />
      <p>{message}</p>
    </div>
  </div>
);

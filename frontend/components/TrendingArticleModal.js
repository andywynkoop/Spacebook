import React from 'react';

const TrendingArticleModal = ({ article: {
  author,
  source,
  description,
  title,
  url,
  urlToImage
}}) =>
  <div className="trending-modal">
    <div className="white-modal-triangle" />
    <h4>
      <a href={url} target="_blank">
        {title}
      </a>
    </h4>
    <div className="trending-modal-body">
      <img src={urlToImage} />
      <div>
        <p className="trending-modal-author">
          {author} - {source.name}
        </p>
        <p>{description}</p>
      </div>
    </div>
  </div>;

export default TrendingArticleModal;

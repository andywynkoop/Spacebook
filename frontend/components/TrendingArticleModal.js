import React, { Component } from 'react';

class TrendingArticleModal extends Component {
  render() {
    const {
      author,
      source,
      description,
      title,
      url,
      urlToImage
    } = this.props.article;
    return (
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
      </div>
    );
  }
}

export default TrendingArticleModal;

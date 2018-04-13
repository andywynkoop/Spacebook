import React, { Component } from 'react';
import TrendingArticleModal from './TrendingArticleModal';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/trending';

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }
  componentDidMount() {
    if (this.props.articles.length === 0) this.props.fetchArticles();
  }
  render() {
    return (
      <div className="item-container trending">
        <h3>
          Trending <i className="fas fa-flask" />
        </h3>
        <ul>
          {this.props.articles.slice(0, 12).map(article => (
            <li key={article.title} className="trending-article">
              <h5>
                <a href={article.url} target="_blank">
                  <i className="fas fa-chart-line" />{' '}
                  <p className="trending-title">{article.title}</p>
                </a>
              </h5>
              <TrendingArticleModal article={article} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({ entities: { articles } }) => ({
  articles
});
const mapDispatchToProps = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles())
});

export default connect(mapStateToProps, mapDispatchToProps)(Trending);

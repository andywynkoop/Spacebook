import React, { Component } from 'react';
import TrendingArticleModal from './TrendingArticleModal';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/trending';

class Trending extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }
  
  render() {
    if (!this.props.trending || window.innerWidth < 1100) return null;
    return (
      <div className="item-container trending">
        <h3>
          Trending <i className="fas fa-flask" />
        </h3>
        <ul>
          {this.props.trending.slice(0, 12).map(article => (
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

const msp = state => ({
  trending: state.entities.trending
});

const mdp = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles())
});

export default connect(msp, mdp)(Trending);

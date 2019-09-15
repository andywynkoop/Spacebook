import React, { Component } from 'react';
import TrendingArticleModal from './TrendingArticleModal';
import { connect } from 'react-redux';
import { fetchArticles } from '../actions/trending';

class Trending extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }
  
  render() {
    const { trending, chatModalOpen } = this.props;
    if (
      !trending 
      || window.innerWidth < 1100 
      || chatModalOpen
    ) return null;
    return (
      <div className="item-container trending">
        <h3>
          Trending <i className="fas fa-flask" />
        </h3>
        <ul>
          {trending.slice(0, 12).map(article => (
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
  trending: state.entities.trending,
  chatModalOpen: state.ui.chatModal
});

const mdp = dispatch => ({
  fetchArticles: () => dispatch(fetchArticles())
});

export default connect(msp, mdp)(Trending);

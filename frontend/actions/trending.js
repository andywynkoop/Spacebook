import { TRENDING_API_KEY } from '../util/trending_util';

export const RECEIVE_ARTICLES = 'RECEIVE_ARTICLES';

const url =
  'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'category=technology&' +
  `apiKey=${TRENDING_API_KEY}`;

export const fetchArticles = () => dispatch =>
  fetch(url)
    .then(res => res.json())
    .then(({ articles }) => dispatch(receiveArticles(articles)));

export const receiveArticles = articles => ({
  type: RECEIVE_ARTICLES,
  articles
});

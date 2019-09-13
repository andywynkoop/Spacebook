export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
import * as SearchAPI from '../util/search_api_util';

export const search = query => dispatch =>
  SearchAPI.search(query).then(
    payload => dispatch({
      type: RECEIVE_SEARCH_RESULTS,
      payload
    }));
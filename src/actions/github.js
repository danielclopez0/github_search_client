export const directGitHubQuery = (searchString) => dispatch => {
  dispatch({
    type: 'DIRECT_SEARCH_REQUEST',
    searchString
  })

  const url = 'https://api.github.com/search/repositories?q=topic:ruby+topic:rails';
  const headers = {};

  return fetch(url, { headers })
    .then(resp => resp.json())
    .then(data => {
      dispatch({
        type: 'DIRECT_SEARCH_RECEIVED',
        payload: data
      })
    })
    .catch(error => {
      dispatch({
        type: 'DIRECT_SEARCH_ERROR',
        error
      })
    })
}

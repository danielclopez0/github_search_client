export const directGitHubQuery = (searchString, sort) => dispatch => {
  dispatch({
    type: 'DIRECT_SEARCH_REQUEST',
    searchString
  })

  const url = `https://api.github.com/search/repositories?q=${searchString}&sort=${sort}&order=desc`;

  return fetch(url)
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

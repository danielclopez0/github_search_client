export const gitHubQuery = (searchString, sort) => dispatch => {
  dispatch({
    type: 'DIRECT_SEARCH_REQUEST',
    searchString
  })

  const url = `http://localhost:3001/repo/${searchString}/${sort}`;

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

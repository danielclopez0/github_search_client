const defaultState = {
  items: [],
  fetching: false,
  error: null
};

export default (state = defaultState, action) => {
  const { type, payload, error } = action;

  switch (type) {
    case 'DIRECT_SEARCH_REQUEST':
      return {
        ...defaultState,
        fetching: true,
      }

    case 'DIRECT_SEARCH_RECEIVED':
      console.log('search received',payload);
      return {
        fetching: false,
        items: payload.items,
        error: null
      }

    case 'DIRECT_SEARCH_ERROR':
      return {
        ...defaultState,
        error
      }

    default:
      return state;
  }
}

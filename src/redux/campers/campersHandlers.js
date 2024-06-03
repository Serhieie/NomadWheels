export const handlePending = (state) => {
  return { ...state, loading: true };
};
export const handleRejected = (state) => {
  return { ...state, error: true, loading: false };
};

export const handleFetchAdvertsFulfilled = (state, action) => {
  const { payload } = action;

  if (state.filter) {
    return {
      ...state,
      campers: payload,
      filter: false,
      loading: false,
      noItems: false,
    };
  }

  if (state.page === 1) {
    return {
      ...state,
      campers: payload,
      loading: false,
      noItems: payload.length < 4,
    };
  }

  if (payload.length < 4) {
    return {
      ...state,
      campers: [...state.campers, ...payload],
      loading: false,
      noItems: true,
    };
  }

  return {
    ...state,
    campers: [...state.campers, ...payload],
    loading: false,
  };
};

export const handleFetchAdvertByIdFulfilled = (state, action) => {
  return {
    ...state,
    activeCamper: action.payload,
    loading: false,
  };
};

//Favorites

export const handleAddFavorite = (state, action) => {
  const camperId = action.payload;
  const camper = state.campers.find((camp) => camp._id === camperId);
  if (camper) {
    state.favorites.findIndex((fav) => fav._id === camperId);
    state.favorites.push(camper);
  }
};

export const handleRemoveFavorite = (state, action) => {
  const camperId = action.payload;
  state.favorites = state.favorites.filter((fav) => fav._id !== camperId);
};

//Filtered
export const handleFetchFilteredAdvertsFulfilled = (state, action) => {
  return {
    ...state,
    campers: action.payload,
    filter: true,
    loading: false,
    noItems: true,
    page: 1,
  };
};

export const handleFetchFilteredAdvertsRejected = (state) => {
  return { ...state, campers: [], error: true, loading: false };
};

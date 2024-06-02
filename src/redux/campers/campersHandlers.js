export const handlePending = (state) => {
  return { ...state, loading: true };
};
export const handleRejected = (state) => {
  return { ...state, error: true, loading: false };
};

export const handleFetchAdvertsFulfilled = (state, action) => {
  if (state.campers.length === 4 && state.page === 1) return;
  if (action.payload.length < 4) {
    return {
      ...state,
      campers: [...state.campers, ...action.payload],
      loading: false,
      noItems: true,
    };
  }
  return {
    ...state,
    campers: [...state.campers, ...action.payload],
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
    const index = state.favorites.findIndex((fav) => fav._id === camperId);
    if (index !== -1) {
      state.favorites.splice(index, 1);
    } else {
      state.favorites.push(camper);
    }
  }
};

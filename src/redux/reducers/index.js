const initialState = {
  favourites: {
    companies: [],
  },
};

const mainReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          companies: [...state.favourites.companies, action.payload],
        },
      };
    case "DELETE":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          companies: state.favourites.companies.filter(
            (job) => job._id !== action.payload
          ),
        },
      };
    default:
      return state;
  }
};

export default mainReducer;

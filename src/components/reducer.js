const initialState = {
  count: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE_COUNTER":
      console.log("Increased");

    default:
      return { ...state };
  }
};

export default reducer;

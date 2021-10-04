const reducer = (state, action) => {
  console.log("act reduce", action);
  switch (action.type) {
    case "SET_FAVORITE":
      return { ...state, mylist: [...state.mylist, action.payload] };
    case "DELETE_FAVORITE":
      return {
        ...state,
        mylist: state.mylist.filter((vid) => vid.id !== action.payload),
      };
    default:
      return state;
  }
};
export default reducer;

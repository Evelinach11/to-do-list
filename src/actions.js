export const SET_FILTER_TYPE = "SET_FILTER_TYPE";

export const addTodo = (text) => ({
  type: "ADD_TODO",
  payload: {
    id: Math.random(),
    text,
    completed: false,
  },
});
export const toggleTodo = (id) => ({
  type: "TOGGLE_TODO",
  payload: { id },
});

export const setFilterType = (filterType) => ({
  type: SET_FILTER_TYPE,
  payload: filterType,
});

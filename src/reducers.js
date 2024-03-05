import { SET_FILTER_TYPE } from "./actions";

const initialState = {
  todos: [],
  filterType: "all",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    case SET_FILTER_TYPE:
      return {
        ...state,
        filterType: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;

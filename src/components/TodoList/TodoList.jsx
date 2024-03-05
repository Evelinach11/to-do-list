import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  Typography,
  FormControl,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import "./todo-list.css";
import React, { useMemo } from "react";
import { toggleTodo } from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const filterType = useSelector((state) => state.filterType);
  const dispatch = useDispatch();

  const handleToggle = (id) => {
    dispatch(toggleTodo(id));
  };

  const filteredTodos = useMemo(() => {
    switch (filterType) {
      case "completed":
        return todos.filter((todo) => todo.completed);
      case "current":
        return todos.filter((todo) => !todo.completed);
      default:
        return todos;
    }
  }, [todos, filterType]);

  const completedCount = todos.filter((todo) => todo.completed).length;
  const uncompletedCount = todos.length - completedCount;

  return (
    <Box className="todoListContainer">
      {todos.length === 0 ? (
        <Typography sx={{ mt: 2 }} variant="subtitle1">
          Your list is empty
        </Typography>
      ) : (
        <Box>
          <Typography sx={{ mt: 2 }} variant="subtitle1">
            Completed: {completedCount} | Uncompleted: {uncompletedCount}
          </Typography>
          <List>
            {filteredTodos.map(({ id, text, completed }) => (
              <ListItem key={id}>
                <Checkbox
                  checked={completed}
                  onChange={() => handleToggle(id)}
                />
                <ListItemText
                  primary={text}
                  sx={{ color: completed ? "text.disabled" : "text.primary" }}
                  disabled={completed}
                />
              </ListItem>
            ))}
          </List>
          <FormControl variant="standard">
            <Select
              labelId="filter-select-label"
              id="filter-select"
              value={filterType}
              onChange={(event) =>
                dispatch({
                  type: "SET_FILTER_TYPE",
                  payload: event.target.value,
                })
              }
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
              <MenuItem value="current">Current</MenuItem>
            </Select>
          </FormControl>
        </Box>
      )}
    </Box>
  );
};

export default TodoList;

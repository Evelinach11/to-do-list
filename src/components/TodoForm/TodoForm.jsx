import "./todo-form.css";
import React from "react";
import { addTodo } from "../../actions";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { TextField, Button } from "@mui/material";

const TodoForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const text = data.text.trim();
    const maxLength = 16;

    if (text.length <= maxLength) {
      dispatch(addTodo(text));
      reset();
    } else {
      alert(
        `Error: Case text length must be less than or equal to ${maxLength} characters.`
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="todoFormContainer">
      <TextField
        type="text"
        {...register("text", { required: true })}
        label="Enter toDo text"
        variant="outlined"
        margin="normal"
        className="textInput"
      />
      <Button sx={{ mt: 2 }} type="submit" variant="contained" color="primary">
        Add ToDo
      </Button>
    </form>
  );
};

export default TodoForm;

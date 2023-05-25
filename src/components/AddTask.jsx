import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import styles from "../modules/addTask.module.css";
import Button from "./Button";
import { addTodo } from "../slices/todoSlice";
import { v4 as uuid } from "uuid";

function AddTask({ type }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("incomplete");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter the title");
      return;
    }
    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleString(),
        })
      );
      toast.success("Task Added Successfully");
      setTitle("");
      setStatus("incomplete");
    }
  };

  return (
    <form className={styles.formAdd} onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="title"
        placeholder="Add a new task"
        className={styles.inputAdd}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <div className={styles.buttonContainer}>
        <Button type="submit" variant="primary">
          Add Task
        </Button>
      </div>
    </form>
  );
}

export default AddTask;

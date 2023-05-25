import React, { useEffect, useState } from "react";
import styles from "../modules/todo-item.module.css";
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteTodo, updateTodo } from "../slices/todoSlice";
import { toast } from "react-hot-toast";
import UpdateTask from "./UpdateTask";
import CheckButton from "./CheckButton";

function TodoItem({ todo }) {
  const todoTextClasses = [
    styles.todoText,
    todo.status === "complete" && styles["todoText-complete"],
  ].join(" ");
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(false);
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  useEffect(() => {
    if (todo.status === "complete") {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [todo.status]);

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
    toast.success("todo delte successfully");
  };
  const handleUpdate = () => {
    setUpdateModalOpen(true);
  };

  const handleCheck = () => {
    setChecked(!checked);
    dispatch(
      updateTodo({
        ...todo,
        status: checked ? "incomplete" : "complete",
      })
    );
  };

  return (
    <>
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <CheckButton
            checked={checked}
            handleCheck={handleCheck}
          ></CheckButton>
          <div className={styles.text}>
            <p className={todoTextClasses}>{todo.title}</p>
            <p className={styles.time}>{todo.time}</p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.iconDelete}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            role="button"
            tabIndex={0}
          >
            <MdDelete></MdDelete>
          </div>
          <div
            className={styles.iconUpdate}
            onClick={handleUpdate}
            onKeyDown={handleUpdate}
            role="button"
            tabIndex={0}
          >
            <MdEdit></MdEdit>
          </div>
        </div>
      </div>
      <UpdateTask
        type="update"
        todo={todo}
        modalOpen={updateModalOpen}
        setModalOpen={setUpdateModalOpen}
      ></UpdateTask>
    </>
  );
}

export default TodoItem;

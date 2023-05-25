import React from "react";
import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";
import styles from "../modules/todo-item.module.css";

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);

  const sortedTodoList = [...todoList];
  sortedTodoList.sort((a, b) => new Date(b.time) - new Date(a.time));
  const filterTodoList = sortedTodoList.filter((item) => {
    if (filterStatus === "all") {
      return true;
    }
    return item.status === filterStatus;
  });
  return (
    <div>
      {filterTodoList && filterTodoList.length > 0 ? (
        filterTodoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)
      ) : (
        <p className={styles.notFound}>
          {" "}
          {filterStatus === "all"
            ? "No Task Found"
            : `No ${filterStatus} Task Found`}
        </p>
      )}
    </div>
  );
}

export default AppContent;

import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";
import styles from "../modules/update.module.css";
import Button from "./Button";
import { updateTodo } from "../slices/todoSlice";
import { AnimatePresence, motion } from "framer-motion";

const popUp = {
  hidden: {
    opacity: 0,
    transform: "scale(0.6)",
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    transform: "scale(0.6",
    opacity: 0,
  },
};

function UpdateTask({ type, modalOpen, setModalOpen, todo }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (type === "update" && todo) {
      setTitle(todo.title);
      setStatus(todo.status);
    }
  }, [type, todo]);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      toast.error("Please enter the title");
      return;
    }
    if (title && status) {
      const updatedTime = new Date().toLocaleString();
      if (
        todo.title !== title ||
        todo.status !== status ||
        todo.time !== updatedTime
      ) {
        dispatch(
          updateTodo({
            ...todo,
            title,
            status,
            time: updatedTime,
          })
        );
        toast.success("Update Successfuly");
      } else {
        toast.error("No Changes Made");
      }
      setModalOpen(false);
    }
  };

  return (
    <AnimatePresence>
      {modalOpen && (
        <motion.div
          className={styles.wrapper}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div
            className={styles.container}
            variant={popUp}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <div
              className={styles.closeButton}
              onClick={() => setModalOpen(false)}
              onKeyDown={() => setModalOpen(false)}
              tabIndex={0}
              role="button"
            ></div>
            <form className={styles.form} onSubmit={handleSubmit}>
              <h1 className={styles.formTitle}>Update Task</h1>
              <label htmlFor="title">
                Title
                <input
                  type="text"
                  id="title"
                  className={styles.input}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </label>
              <label htmlFor="status">
                Status
                <select
                  name="status"
                  id="formStatus"
                  className={styles.formStatus}
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="incomplete">Incomplete</option>
                  <option value="complete">Complete</option>
                </select>
              </label>
              <div className={styles.buttonContainer}>
                <Button type="submit" variant="primary">
                  Update Task
                </Button>
                <Button
                  type="button"
                  variant="cancel"
                  onClick={() => setModalOpen(false)}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default UpdateTask;

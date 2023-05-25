import React, { useState } from "react";
import Button from "./Button";
import UpdateTask from "./UpdateTask";
import styles from "../modules/header.module.css";
import { useDispatch, useSelector } from "react-redux";
import { updateFilterStatus } from "../slices/todoSlice";
import AddTask from "./AddTask";

function AppHeader() {
  const [modalOpen, setModalOpen] = useState(false);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const dispatch = useDispatch();

  const updateFilter = (status) => {
    dispatch(updateFilterStatus(status));
  };

  return (
    <div className={styles.appHeader}>
      <AddTask></AddTask>
      <div className={styles.filterButton}>
        <Button
          variant={filterStatus === "all" ? "primary" : "secondary"}
          onClick={() => updateFilter("all")}
        >
          All
        </Button>
        <Button
          variant={filterStatus === "incomplete" ? "primary" : "secondary"}
          onClick={() => updateFilter("incomplete")}
        >
          Incomplete
        </Button>
        <Button
          variant={filterStatus === "complete" ? "primary" : "secondary"}
          onClick={() => updateFilter("complete")}
        >
          Complete
        </Button>
      </div>
      <UpdateTask
        type="add"
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      />
    </div>
  );
}

export default AppHeader;

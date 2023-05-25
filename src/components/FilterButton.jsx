import React from "react";
import Button from "./Button";

function FilterButton() {
  return (
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
  );
}

export default FilterButton;

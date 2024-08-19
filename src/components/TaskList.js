import React from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className="task">
          <Task text={task.text} category={task.category} />
        </div>
      ))}
    </div>
  );
}

export default TaskList;
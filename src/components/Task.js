import React from "react";

function Task({ text, category, onDelete }) {
  return (
    <div>
      <p>{text}</p>
      <p>{category}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default Task;
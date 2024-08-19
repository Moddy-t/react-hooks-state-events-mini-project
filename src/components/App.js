import React, { useState } from "react";
import NewTaskForm from "./NewTaskForm";
import CategoryFilter from "./CategoryFilter";
import TaskList from "./TaskList";
import { CATEGORIES } from "../data";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Buy rice", category: "Food" },
    { id: 2, text: "Build a todo app", category: "Code" },
   
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTasks =
    selectedCategory === "All"
      ? tasks
      : tasks.filter((task) => task.category === selectedCategory);

  const handleTaskFormSubmit = (newTask) => {
    setTasks([...tasks, { id: tasks.length + 1, ...newTask }]);
  };

  return (
    <div>
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleTaskFormSubmit} />
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <TaskList tasks={filteredTasks} />
    </div>
  );
}

export default App;
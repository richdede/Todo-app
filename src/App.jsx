import { useState } from "react";
import AddTask from "./components/AddTask";
import ThemeSwitcher from "./components/ThemeSwitcher";
import Todos from "./components/Todos";
import { v4 as uuidv4 } from "uuid";
//
export default function App() {
  //
  const [tasks, setTasks] = useState([
    { id: uuidv4(), text: "Complete online JavaScript Course", done: true },
    { id: uuidv4(), text: "Jog around the park 3x", done: false },
    { id: uuidv4(), text: "10 minutes meditation", done: false },
    { id: uuidv4(), text: "Read for 1 hour", done: false },
    { id: uuidv4(), text: "Pick up groceries", done: false },
    { id: uuidv4(), text: "Complete Todo App on Frontend Mentor", done: false },
  ]);
  const [filterText, setFilterText] = useState("All");
  //
  //
  const handleAddTask = (e) => {
    if (e.key === "Enter") {
      setTasks([{ id: uuidv4(), text: e.target.value, done: false }, ...tasks]);
    }
  };
  //
  const handleTaskDone = (task) => {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      }),
    );
  };
  //
  function handleDeleteTask(taskId) {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }
  //
  return (
    <main className="flex min-h-screen w-full justify-center bg-lightTheme-veryLightGrayishBlue bg-bgMobileLight bg-contain bg-top bg-no-repeat font-Josefin dark:bg-darkTheme-veryDarkBlue dark:bg-bgMobileDark sm:bg-bgDesktopLight sm:dark:bg-bgDesktopDark">
      <div className="mt-8 w-full space-y-4 p-6 sm:max-w-screen-sm md:mt-10 md:space-y-6">
        {/* Theme Switcher */}
        <section>
          <ThemeSwitcher />
        </section>
        {/* Add Task */}
        <section>
          <AddTask onTaskAdd={handleAddTask} />
        </section>
        {/* Todos */}
        <section>
          <Todos
            setTasks={setTasks}
            tasks={tasks}
            onTaskDone={handleTaskDone}
            onTaskDelete={handleDeleteTask}
            setFilterText={setFilterText}
            filterText={filterText}
          />
        </section>
        <p className="text-center text-darkTheme-darkGrayishBlue-200">
          Drag and drop to reorder list
        </p>
      </div>
    </main>
  );
}

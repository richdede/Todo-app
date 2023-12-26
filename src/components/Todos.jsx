/* eslint-disable react/prop-types */
import FilterDesktop from "./FilterDesktop";
import FilterMobile from "./FilterMobile";
import TaskList from "./TaskList";
//
export default function Todos({
  tasks,
  setTasks,
  onTaskDone,
  onTaskDelete,
  setFilterText,
  filterText,
}) {
  //
  //
  //
  const renderedTasks = () => {
    switch (filterText) {
      case "All": {
        return tasks;
      }
      case "Active": {
        return tasks.filter((t) => t.done === false);
      }
      case "Completed": {
        return tasks.filter((t) => t.done === true);
      }
      default:
        break;
    }
  };
  const leftTasks = tasks.filter((t) => t.done === false).length;
  //
  return (
    <>
      <div className="rounded-md bg-lightTheme-veryLightGray py-4 shadow-2xl dark:bg-darkTheme-veryDarkDesaturatedBlue">
        <TaskList
          tasks={renderedTasks()}
          setTasks={setTasks}
          onTaskDone={onTaskDone}
          onTaskDelete={onTaskDelete}
        />
        <FilterDesktop
          leftTasks={leftTasks}
          setFilterText={setFilterText}
          tasks={tasks}
          setTasks={setTasks}
        />
      </div>
      <FilterMobile
        setFilterText={setFilterText}
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
}

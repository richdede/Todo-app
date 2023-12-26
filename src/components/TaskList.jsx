/* eslint-disable react/prop-types */
import Task from "./Task";
import { Reorder } from "framer-motion";
//
export default function TaskList({
  tasks,
  setTasks,
  onTaskDone,
  onTaskDelete,
}) {
  //
  //
  return (
    <Reorder.Group axis="y" values={tasks} onReorder={setTasks}>
      {tasks.map((task) => (
        <Task
          task={task}
          key={task.id}
          onTaskDone={onTaskDone}
          onTaskDelete={onTaskDelete}
        />
      ))}
    </Reorder.Group>
  );
}

/* eslint-disable react/prop-types */
import { projectImages } from "../assets/images/images";
import { useMotionValue, Reorder } from "framer-motion";
//
//
export default function Task({ task, onTaskDone, onTaskDelete }) {
  //
  const y = useMotionValue(0);
  //
  function doneCheck() {
    if (task.done === true) {
      return false;
    } else {
      return true;
    }
  }
  //
  return (
    <Reorder.Item value={task} id={task} style={y}>
      <div className="flex cursor-pointer items-center gap-3 border-b border-lightTheme-darkGrayishBlue bg-lightTheme-veryLightGray p-4 py-3 text-sm dark:border-darkTheme-darkGrayishBlue-300 dark:bg-darkTheme-veryDarkDesaturatedBlue sm:text-lg">
        <div
          className="rounded-full p-[.75px] hover:bg-gradient"
          onClick={() => {
            onTaskDone({
              ...task,
              done: doneCheck(),
            });
          }}
        >
          <div
            className={`relative flex items-center justify-center rounded-full border ${
              task.done
                ? "border-none"
                : "border-darkTheme-lightGrayishBlue-200"
            } ${
              task.done
                ? "bg-gradient"
                : "bg-lightTheme-veryLightGray dark:bg-darkTheme-veryDarkDesaturatedBlue"
            } p-2  ${
              task.done
                ? "border-none"
                : "dark:border-darkTheme-darkGrayishBlue-200"
            } hover:border-transparent dark:hover:border-transparent sm:p-3`}
          >
            {task.done && (
              <img
                src={projectImages.checkIcon}
                className="absolute w-2 sm:w-3"
                alt="check-icon"
              />
            )}
          </div>
        </div>
        <div>
          <p
            className={` 
                text-lightTheme-veryDarkGrayishBlue
                 dark:text-darkTheme-lightGrayishBlue-100 
                 ${task.done ? "  line-through opacity-30" : ""}`}
          >
            {task.text}
          </p>
        </div>
        <img
          src={projectImages.crossIcon}
          alt="cross-icon"
          className="ml-auto"
          onClick={() => {
            onTaskDelete(task.id);
          }}
        />
      </div>
    </Reorder.Item>
  );
}

/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterButton from "./FilterButton";
import { v4 as uuidv4 } from "uuid";

export default function FilterDesktop({
  leftTasks,
  setFilterText,
  tasks,
  setTasks,
}) {
  //
  const [filterButtons, setFilterButtons] = useState([
    { id: uuidv4(), text: "All", active: true },
    { id: uuidv4(), text: "Active", active: false },
    { id: uuidv4(), text: "Completed", active: false },
  ]);
  //
  function handleFilterChoose(button) {
    setFilterButtons(
      filterButtons.map((b) => {
        if (b.id === button.id) {
          return { ...button, active: true };
        } else {
          return { ...b, active: false };
        }
      }),
    );
  }
  //
  return (
    <div className="flex items-center justify-between p-4 pb-0 text-xs text-lightTheme-veryDarkGrayishBlue dark:text-darkTheme-lightGrayishBlue-200 sm:text-base">
      <p className="opacity-70">{leftTasks} items left</p>
      {/* filter buttons */}
      <div className="space-x-3 max-sm:hidden">
        {filterButtons.map((button) => (
          <FilterButton
            key={button.id}
            text={button.text}
            active={button.active}
            onClick={() => {
              handleFilterChoose(button);
              setFilterText(button.text);
            }}
          />
        ))}
      </div>
      <FilterButton
        text={"Clear Completed"}
        onClick={() => {
          setTasks(tasks.filter((t) => t.done === false));
        }}
      />
    </div>
  );
}

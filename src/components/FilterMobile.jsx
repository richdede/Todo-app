/* eslint-disable react/prop-types */
import { useState } from "react";
import FilterButton from "./FilterButton";
import { v4 as uuidv4 } from "uuid";

export default function FilterMobile({ setFilterText }) {
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
    <div className="mt-4 flex items-center justify-between rounded-md bg-lightTheme-veryLightGray p-4 text-xs text-lightTheme-veryDarkGrayishBlue shadow-2xl dark:bg-darkTheme-veryDarkDesaturatedBlue dark:text-darkTheme-lightGrayishBlue-200 sm:hidden sm:text-base">
      {/* filter buttons */}
      <div className="mx-auto space-x-3 text-base">
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
    </div>
  );
}

/* eslint-disable react/prop-types */
import { useState } from "react";

export default function AddTask({ onTaskAdd }) {
  //
  const [text, setText] = useState("");
  //
  return (
    <div className="flex w-full items-center gap-3 rounded-md bg-lightTheme-veryLightGray p-4 dark:bg-darkTheme-veryDarkDesaturatedBlue">
      <div className="rounded-full border border-darkTheme-lightGrayishBlue-200 p-2 dark:border-darkTheme-darkGrayishBlue-200 sm:p-3"></div>
      <input
        type="text"
        placeholder="Create a new todo.."
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          onTaskAdd(e);
          if (e.key === "Enter") {
            setText("");
          }
        }}
        className="w-full bg-transparent text-lightTheme-veryDarkGrayishBlue outline-none dark:text-darkTheme-lightGrayishBlue-100  dark:placeholder:opacity-50
        sm:text-lg"
      />
    </div>
  );
}

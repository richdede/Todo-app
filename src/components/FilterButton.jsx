/* eslint-disable react/prop-types */
export default function FilterButton({ text, active, onClick }) {
  return (
    <button
      className={`opacity-70 ${
        active && "text-brightBlue opacity-100"
      } hover:opacity-100 active:text-brightBlue`}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

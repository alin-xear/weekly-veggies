import { useEffect, useState } from "react";

const weekday = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function AddItem({ weeklyItems, setWeeklyItems }) {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!item || item === " ") return;
    setItem("");
    setWeeklyItems([
      ...weeklyItems,
      { name: item, day: weekday[new Date().getDay()] },
    ]);
  }

  useEffect(() => {
    localStorage.setItem("weeklyItems", JSON.stringify(weeklyItems));
  }, [weeklyItems]);

  return (
    <form onSubmit={handleSubmit} className="flex justify-center">
      <div className="border-4 border-blue-400 border-l-red-500 border-r-red-500 rounded-full">
        <input
          value={item}
          onChange={(e) => setItem(e.target.value)}
          type="text"
          name="mainInput"
          className="rounded-l-full border-0 py-1.5 px-3 md:px-7 focus:ring-0 focus-visible:outline-none"
          placeholder="What's your poison"
        />
        <button className="rounded-r-full bg-green-400 px-3 md:px-7 py-1.5">
          Nom nom
        </button>
      </div>
    </form>
  );
}

export default AddItem;

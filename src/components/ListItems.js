import Item from "./Item";

const sorter = {
  // "sunday": 0, // << if sunday is first day of week
  monday: 1,
  tuesday: 2,
  wednesday: 3,
  thursday: 4,
  friday: 5,
  saturday: 6,
  sunday: 7,
};

function ListItems({ weeklyItems, setWeeklyItems }) {
  const sortedArray = weeklyItems.slice().sort(function sortByDay(a, b) {
    let day1 = a.day.toLowerCase();
    let day2 = b.day.toLowerCase();
    return sorter[day1] - sorter[day2];
  });

  function handleDeleteItem(name) {
    setWeeklyItems((weeklyItems) =>
      weeklyItems.filter((item) => item.name !== name)
    );
  }

  return (
    <div>
      <p className="my-10 ">
        You have eaten{" "}
        <span className="font-semibold text-5xl">{weeklyItems.length}</span>{" "}
        greens this week
      </p>
      <button
        className="px-3 md:px-7 py-1.5 bg-cyan-200 border-4 border-blue-400 border-l-red-400 border-r-red-400 rounded-full"
        onClick={() => setWeeklyItems([])}
      >
        Reset
      </button>
      <ul className="mt-9 flex flex-wrap">
        {sortedArray.map((item) => (
          <Item
            handleDeleteItem={handleDeleteItem}
            item={item}
            key={item.name}
          />
        ))}
      </ul>
    </div>
  );
}

export default ListItems;

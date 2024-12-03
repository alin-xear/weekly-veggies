import Item from "./Item";

function ListItems({ weeklyItems, setWeeklyItems }) {
  function handleDeleteItem(name) {
    setWeeklyItems((weeklyItems) =>
      weeklyItems.filter((item) => item.name !== name)
    );
  }

  return (
    <div>
      <p className="my-10 ">
        You have eaten{" "}
        <span className="text-shadow font-semibold text-5xl">
          {weeklyItems.length}
        </span>{" "}
        greens this week
      </p>
      <button
        className="px-3 md:px-7 py-1.5 bg-cyan-200 border-4 border-blue-400 border-l-red-400 border-r-red-400 rounded-full"
        onClick={() => setWeeklyItems([])}
      >
        Reset
      </button>
      <ul className="mt-9 flex flex-wrap">
        {weeklyItems.map((item) => (
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

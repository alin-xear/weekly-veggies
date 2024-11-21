function Item({ item, handleDeleteItem }) {
  return (
    <li className="flex justify-between w-full border-b py-3 px-5 mb-3">
      <span className="capitalize text-slate-800">{item.name}</span>
      <span className="capitalize text-blue-950">
        {item.day}{" "}
        <button
          onClick={() => handleDeleteItem(item.name)}
          className="p-1 ml-5 bg-cyan-200 rounded-full"
        >
          🗑️
        </button>
      </span>
    </li>
  );
}

export default Item;

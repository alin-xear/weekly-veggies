import { useState } from "react";
import AddItem from "./components/AddItem";
import Marquee from "./components/marquee/Marquee";
import ListItems from "./components/ListItems";

const storageItems = localStorage.getItem("weeklyItems")
  ? JSON.parse(localStorage.getItem("weeklyItems"))
  : [];

function App() {
  const [weeklyItems, setWeeklyItems] = useState(storageItems);

  return (
    <div className="flex flex-col min-h-screen font-mono bg-gradient-to-r  from-cyan-500 text-center to-blue-500">
      <Marquee />
      <main className="max-w-3xl ml-auto mr-auto px-1">
        <h1 className="text-xl md:text-3xl font-semibold mt-10 md:mt-20 mb-3">
          Experts say we should eat 20 to 30 fruits or vegetables weekly.
        </h1>
        <p className="text-lg mb-10 md:mb-20">
          You can use the app below to track your progress.
        </p>
        <AddItem weeklyItems={weeklyItems} setWeeklyItems={setWeeklyItems} />
        <ListItems weeklyItems={weeklyItems} setWeeklyItems={setWeeklyItems} />
      </main>
      <footer className="mt-auto mb-3">
        <i className="text-xs ">*This app has a device based memory</i>
      </footer>
    </div>
  );
}

export default App;

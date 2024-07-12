import TabContent from "./components/TabContent/TabContent";
import Tabs from "./components/Tabs";

function App() {
  return (
    <div className="grid md:grid-cols-12 grid-cols-1 md:grid-rows-1 grid-rows-12 w-full h-full">
      <div className="col-span-7 bg-red-300 md:row-span-12 row-span-11">A</div>
      <TabContent />
      <Tabs />
    </div>
  );
}

export default App;

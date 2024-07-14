import MainContent from "./MainContent";
import NavBar from "./NavBar";

const MainContainer = () => {
  return (
    <div className="col-span-8 md:row-span-12 bg-gray-200 row-span-11 flex flex-col">
      <NavBar />
      <MainContent />
    </div>
  );
};

export default MainContainer;

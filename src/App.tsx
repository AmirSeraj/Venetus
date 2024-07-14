import { useEffect } from "react";
import { useData } from "./components/Context";
import TabContent from "./components/TabContent/TabContent";
import Tabs from "./components/Tabs";
import MainContainer from "./components/Container/MainContainer";
import { NextUIProvider } from "@nextui-org/system";

function App() {
  const { setEstikers } = useData();

  useEffect(() => {
    //getStikers from backend
    setEstikers([
      "/estikers/1.jfif",
      "/estikers/2.jfif",
      "/estikers/3.jfif",
      "/estikers/4.jfif",
      "/estikers/5.jfif",
      "/estikers/6.jfif",
      "/estikers/7.jfif",
      "/estikers/8.jfif",
      "/estikers/9.jfif",
      "/estikers/10.jfif",
      "/estikers/11.jfif",
    ]);
  }, []);

  return (
    <NextUIProvider>
      <div className="grid md:grid-cols-12 grid-cols-1 md:grid-rows-1 grid-rows-12 w-full h-full">
        <MainContainer />
        <TabContent />
        <Tabs />
      </div>
    </NextUIProvider>
  );
}

export default App;

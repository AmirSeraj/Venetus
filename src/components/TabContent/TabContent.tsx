import { useData } from "../Context";
import Estikers from "./Estikers";
import TextPicker from "./TextPicker";
import Upload from "./Upload";

const TabContent = () => {
  const { tabSelected } = useData();
  return (
    <div className="col-span-3 md:block hidden">
      {tabSelected === "upload" && <Upload />}
      {tabSelected === "txt" && <TextPicker />}
      {tabSelected === "estiker" && <Estikers />}
      {tabSelected === "ready_txt" && <div>ready_txt</div>}
    </div>
  );
};

export default TabContent;

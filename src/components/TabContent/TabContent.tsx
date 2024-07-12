import { useData } from "../Context";
import Upload from "./Upload";

const TabContent = () => {
  const { tabSelected } = useData();
  return (
    <div className="col-span-4 md:block hidden">
      {tabSelected === "upload" && <Upload />}
      {tabSelected === "txt" && <div>txt</div>}
      {tabSelected === "estiker" && <div>estiker</div>}
      {tabSelected === "ready_txt" && <div>ready_txt</div>}
    </div>
  );
};

export default TabContent;

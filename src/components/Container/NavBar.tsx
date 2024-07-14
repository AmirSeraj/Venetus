import { Button } from "@nextui-org/button";
import { RiDeleteBin6Line } from "react-icons/ri";
import { GoCopy } from "react-icons/go";
import { Tooltip } from "@nextui-org/tooltip";
import { SiDatabricks } from "react-icons/si";


const NavBar = () => {
  return (
    <div className="w-full h-[50px] flex bg-white border-b border-slate-300">
      <div className="w-[135px] border border-r border-l border-slate-300 border-t-0 border-b-0 flex justify-center items-center">
        <Button color="primary">ثبت سفارش</Button>
      </div>
      <div className="flex items-center md:gap-3 gap-1 md:mr-3 mr-1">
        <Tooltip
          placement="bottom"
          content="حذف اشیا"
          showArrow={true}
          className="px-3 py-2 bg-slate-800 text-[#f0f0f0]"
          size="sm"
          shadow="lg"
        >
          <Button className="p-0" size="sm">
            <RiDeleteBin6Line size={20} />
          </Button>
        </Tooltip>
        <Tooltip
          placement="bottom"
          content="تکثیر اشیا"
          showArrow={true}
          className="px-3 py-2 bg-slate-800 text-[#f0f0f0]"
          size="sm"
          shadow="lg"
        >
          <Button className="p-0" size="sm">
            <GoCopy size={20} />
          </Button>
        </Tooltip>
        <Tooltip
          placement="bottom"
          content="حذف اشیا"
          showArrow={true}
          className="px-3 py-2 bg-slate-800 text-[#f0f0f0]"
          size="sm"
          shadow="lg"
        >
          <Button className="p-0" size="sm">
            <SiDatabricks size={20} />
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default NavBar;

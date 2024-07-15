import { Button } from "@nextui-org/button";
import { useRef } from "react";

const MainContent = () => {
  const ImgRef = useRef<HTMLInputElement | null | undefined>();
  const handleSelectImg = () => {
    ImgRef.current?.click();
  };
  return (
    <div className="flex justify-center items-center w-full h-[calc(100vh-50px)] relative">
      <div className="absolute right-4 top-3 flex gap-2">
        <Button color="primary" onClick={handleSelectImg}>
          <input ref={ImgRef} type="file" className="hidden" />
          انتخاب طرح
        </Button>
        <div className="flex flex-col gap-1">
          <div className="w-[45px] h-[45px] border border-slate-400 rounded-lg text-xs flex justify-center items-center">
            طرح 1
          </div>
          <div className="w-[45px] h-[45px] border border-slate-400 rounded-lg text-xs flex justify-center items-center">
            طرح 2
          </div>
          <div className="w-[45px] h-[45px] border border-slate-400 rounded-lg text-xs flex justify-center items-center">
            طرح 3
          </div>
          <div className="w-[45px] h-[45px] border border-slate-400 rounded-lg text-xs flex justify-center items-center">
            طرح 4
          </div>
          <div className="w-[45px] h-[45px] border border-slate-400 rounded-lg text-xs flex justify-center items-center">
            طرح 5
          </div>
        </div>
      </div>
      <div className="w-[360px] h-full bg-white md:p-5 p-3"></div>
    </div>
  );
};

export default MainContent;

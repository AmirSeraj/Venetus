import { useData } from "../Context";

const Estikers = () => {
  const { estikers } = useData();
  return (
    <div className="grid grid-cols-2 gap-1 h-[100vh] overflow-y-scroll p-2">
      {estikers.map((estiker, index) => (
        <div className="w-[205px] h-[205px] rounded-lg overflow-hidden shadow-lg mb-1 cursor-pointer">
          <img className="w-full h-full aspect-square" src={estiker} key={index} />
        </div>
      ))}
    </div>
  );
};

export default Estikers;

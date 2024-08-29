import vector from "../../../assets/Vector.png";
import frame from "../../../assets/Frame.png";
const HeaderContent = () => {
  return (
    <div className="flex justify-between items-center h-[43px]">
      <img src={vector} alt="vector" />
      <div className="text-center">
        <h1 className="text-base font-semibold text-[18px]">Dula Will Maker</h1>
        <p className="text-[15px] opacity-75">Tony’s Last Will & Testament</p>
      </div>
      <img src={frame} alt="frame" />
    </div>
  );
};

export default HeaderContent;

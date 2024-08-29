import wifi from "../../../assets/topbar/wifi.png";
import battery from "../../../assets/topbar/battery.png";
import network from "../../../assets/topbar/network.png";

const TopBar = () => {
  return (
    <div className="flex justify-between items-center text-xl ">
      <span>9:41</span>
      <div className="flex space-x-2">
        <img src={network} alt="" />
        <img src={wifi} alt="" />
        <img src={battery} alt="" />
      </div>
    </div>
  );
};

export default TopBar;

import HeaderContent from "./widgets/HeaderContent";
import HeaderTabs from "./widgets/HeaderTab";
// import TopBar from "./widgets/TopBar";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-t-md mb-5 text-white p-4">
      {/* <TopBar /> */}
      <HeaderContent />
      <HeaderTabs />
    </header>
  );
};

export default Header;

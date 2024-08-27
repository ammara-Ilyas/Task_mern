import HeaderContent from "./widgets/HeaderContent";
import HeaderTabs from "./widgets/HeaderTab";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col space-y-5 rounded-t-md mb-3 text-white p-4">
      <HeaderContent />
      <HeaderTabs />
    </header>
  );
};

export default Header;

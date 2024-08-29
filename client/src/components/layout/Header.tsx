import HeaderContent from "./widgets/HeaderContent";
import StepIndicator from "./widgets/HeaderTab";
import TopBar from "./widgets/Topbar";
const Header = () => {
  return (
    <>
      <header className="bg-gradient-to-r from-cyan-500 to-blue-500 flex flex-col space-y-5  text-white p-4 pb-6 ">
        <TopBar />
        <HeaderContent />
      </header>
      <StepIndicator />
    </>
  );
};

export default Header;

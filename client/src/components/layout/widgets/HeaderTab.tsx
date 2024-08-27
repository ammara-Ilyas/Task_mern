const HeaderTabs = () => {
  return (
    <div className="flex justify-around mt-4 text-sm">
      <div className="text-center">
        <span className="bg-white text-cyan-500 rounded-full px-2 py-1 mr-1">
          1
        </span>
        Basics
      </div>
      <div className="text-center font-semibold">
        <span className="bg-white text-cyan-500 rounded-full px-2 py-1 mr-1">
          2
        </span>
        Nominees
      </div>
      <div className="text-center">
        <span className="bg-white text-cyan-500 rounded-full px-2 py-1 mr-1">
          3
        </span>
        Assets
      </div>
    </div>
  );
};

export default HeaderTabs;

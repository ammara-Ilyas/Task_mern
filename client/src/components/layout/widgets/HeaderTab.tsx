const StepIndicator = () => {
  return (
    <div className="bg-gray-100 h-[48px]  w-full flex justify-center space-x-[6px] items-center">
      {/* Basics - Completed */}
      <div className="flex items-center ml-5 space-x-[6px]">
        <div className="bg-cyan-500 rounded-full p-1 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <span className="text-cyan-500 font-medium">Basics</span>
      </div>

      {/* Divider */}
      <div className="w-[25px] h-[1px] bg-cyan-500"></div>

      {/* Nominees - Current Step */}
      <div className="flex items-center space-x-[6px]">
        <div className="bg-cyan-500 rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
          2
        </div>
        <span className="text-cyan-500 font-medium">Nominees</span>
      </div>

      {/* Divider */}
      <div className="w-[25px] h-[1px] bg-cyan-500"></div>

      {/* Assets - Upcoming Step */}
      <div className="flex items-center space-x-[6px]">
        <div className="bg-black rounded-full w-5 h-5 flex items-center justify-center text-white text-xs">
          3
        </div>{" "}
        <span className="text-black font-medium">Assest</span>
      </div>
      <div className="w-[25px] h-[1px] bg-black"></div>
    </div>
  );
};

export default StepIndicator;

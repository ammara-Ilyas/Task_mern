import React from "react";
import { useApiContext } from "../contextApi/ApiContext";
import Button from "./UI/Button";

const UnderageSection: React.FC = () => {
  const { state, dispatch } = useApiContext();
  const { underageChildren } = state;

  return (
    <div className="mb-6 flex flex-col space-y-3 h-[127px]">
      <p className=" font-bold text-[18px]">
        Are any of your children under the age of 18?*
      </p>
      <div className="flex justify-between h-[69px] ">
        <Button
          design={`${
            underageChildren === true
              ? "bg-cyan-50 text-cyan-500"
              : "bg-white text-black"
          } py-2 px-4  rounded-md w-[160px] border-2  border-cyan-400`}
          text="Yes"
          handleFunctionality={() =>
            dispatch({ type: "SET_UNDERAGE_CHILDREN", payload: true })
          }
        />
        <Button
          design={`${
            underageChildren === false
              ? "bg-cyan-50 text-cyan-500"
              : "bg-white  text-black"
          } py-2 px-4 rounded-md w-[160px] border-2  border-cyan-400`}
          text="No"
          handleFunctionality={() =>
            dispatch({ type: "SET_UNDERAGE_CHILDREN", payload: false })
          }
        />
      </div>
    </div>
  );
};

export default UnderageSection;

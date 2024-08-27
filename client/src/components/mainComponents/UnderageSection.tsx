import React from "react";
import { useApiContext } from "../contextApi/ApiContext";
import Button from "./UI/Button";

const UnderageSection: React.FC = () => {
  const { state, dispatch } = useApiContext();
  const { underageChildren } = state;

  return (
    <div className="mb-6">
      <p className="mb-2 font-bold">
        Are any of your children under the age of 18?*
      </p>
      <div className="flex gap-4">
        <Button
          design={`${
            underageChildren === true ? "bg-blue-500 text-white" : "bg-gray-200"
          } py-2 px-4 rounded`}
          text="Yes"
          handleFunctionality={() =>
            dispatch({ type: "SET_UNDERAGE_CHILDREN", payload: true })
          }
        />
        <Button
          design={`${
            underageChildren === false
              ? "bg-blue-500 text-white"
              : "bg-gray-200"
          } py-2 px-4 rounded`}
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

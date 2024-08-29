import React from "react";
import { useApiContext } from "../contextApi/ApiContext";
import Button from "./UI/Button";
import icon from "../../assets/fi_471664.png";

const ChildrenSection: React.FC = () => {
  const { state, dispatch } = useApiContext();
  const { hasChildren, children } = state;

  const handleAddChild = () => {
    dispatch({ type: "SET_CHILDREN", payload: [...children, { name: "" }] });
  };

  const handleRemoveChild = (index: number) => {
    const updatedChildren = children.filter((_, i: any) => i !== index);
    dispatch({ type: "SET_CHILDREN", payload: updatedChildren });
  };

  return (
    <div className=" flex flex-col ">
      <div className=" flex flex-col space-y-3 h-[127px]">
        <div className="flex justify-between items-center h-[21px] ">
          <p className=" font-semibold text-[18px]">
            Do you have any children?*
          </p>
          <img src={icon} alt="?" />
        </div>

        <div className="flex justify-between h-[60px] ">
          <Button
            design={`${
              hasChildren === true
                ? "bg-cyan-50 text-cyan-500"
                : "bg-white text-black"
            } py-2 px-4  rounded-md w-[160px] border-2  border-cyan-400`}
            text="Yes"
            handleFunctionality={() =>
              dispatch({ type: "SET_HAS_CHILDREN", payload: true })
            }
          />
          <Button
            design={`${
              hasChildren === false
                ? "bg-cyan-50 text-cyan-500"
                : "bg-white  text-black"
            } py-2 px-4 rounded-md w-[160px] border-2  border-cyan-400`}
            text="No"
            handleFunctionality={() =>
              dispatch({ type: "SET_HAS_CHILDREN", payload: false })
            }
          />
        </div>
      </div>
      {hasChildren && (
        <div className=" w-[348px] flex flex-col justify-between">
          <p className="text-[18px]">
            What are the full legal names of your children?*
          </p>
          {children.map((child, index) => (
            <div key={index} className="flex items-center mb-2 ">
              <input
                type="text"
                value={child.name}
                onChange={(e) => {
                  const newChildren = [...children];
                  newChildren[index].name = e.target.value;
                  dispatch({ type: "SET_CHILDREN", payload: newChildren });
                }}
                placeholder="Full name of first child"
                className="border-none outline-none p-2 rounded w-full"
              />
              {children.length > 1 && (
                <Button
                  design="text-red-500 ml-2"
                  text="Delete"
                  handleFunctionality={() => handleRemoveChild(index)}
                />
              )}
            </div>
          ))}
          <Button
            design="text-cyan-300 border-2 border-cyan-300 rounded-md border-dashed py-2"
            text="+ Click to add another"
            handleFunctionality={handleAddChild}
          />
        </div>
      )}
    </div>
  );
};

export default ChildrenSection;

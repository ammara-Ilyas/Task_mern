import React from "react";
import { useApiContext } from "../contextApi/ApiContext";
import Button from "./UI/Button";

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
    <div className="mb-6 flex flex-col space-y-3">
      <p className="mb-2 font-bold">Do you have any children?*</p>
      <div className="flex gap-4 mb-4">
        <Button
          design={`${
            hasChildren === true ? "bg-blue-500 text-white" : "bg-gray-200"
          } py-2 px-4 rounded`}
          text="Yes"
          handleFunctionality={() =>
            dispatch({ type: "SET_HAS_CHILDREN", payload: true })
          }
        />
        <Button
          design={`${
            hasChildren === false ? "bg-blue-500 text-white" : "bg-gray-200"
          } py-2 px-4 rounded`}
          text="No"
          handleFunctionality={() =>
            dispatch({ type: "SET_HAS_CHILDREN", payload: false })
          }
        />
      </div>

      {hasChildren && (
        <div>
          <p className="mb-2">
            What are the full legal names of your children?*
          </p>
          {children.map((child, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={child.name}
                onChange={(e) => {
                  const newChildren = [...children];
                  newChildren[index].name = e.target.value;
                  dispatch({ type: "SET_CHILDREN", payload: newChildren });
                }}
                placeholder="Full name of first child"
                className="border p-2 rounded w-full"
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
            design="text-blue-500 mt-2"
            text="+ Click to add another"
            handleFunctionality={handleAddChild}
          />
        </div>
      )}
    </div>
  );
};

export default ChildrenSection;

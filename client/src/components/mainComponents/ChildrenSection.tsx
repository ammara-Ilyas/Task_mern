import React from "react";
import { useApiContext } from "../contextApi/ApiContext";

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
    <div className="mb-6">
      <p className="mb-2">Do you have any children?*</p>
      <div className="flex gap-4 mb-4">
        <button
          onClick={() => dispatch({ type: "SET_HAS_CHILDREN", payload: true })}
          className={`${
            hasChildren === true ? "bg-blue-500 text-white" : "bg-gray-200"
          } py-2 px-4 rounded`}
        >
          Yes
        </button>
        <button
          onClick={() => dispatch({ type: "SET_HAS_CHILDREN", payload: false })}
          className={`${
            hasChildren === false ? "bg-blue-500 text-white" : "bg-gray-200"
          } py-2 px-4 rounded`}
        >
          No
        </button>
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
                <button
                  onClick={() => handleRemoveChild(index)}
                  className="text-red-500 ml-2"
                >
                  Delete
                </button>
              )}
            </div>
          ))}
          <button onClick={handleAddChild} className="text-blue-500 mt-2">
            + Click to add another
          </button>
        </div>
      )}
    </div>
  );
};

export default ChildrenSection;

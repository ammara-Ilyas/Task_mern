import React from "react";
import { useApiContext } from "../contextApi/ApiContext";

const UnderageSection: React.FC = () => {
  const { state, dispatch } = useApiContext();
  const { underageChildren, children } = state;

  const handleAddChild = () => {
    dispatch({ type: "SET_CHILDREN", payload: [...children, { name: "" }] });
  };

  const handleRemoveChild = (index: number) => {
    const updatedChildren = children.filter((_, i) => i !== index);
    dispatch({ type: "SET_CHILDREN", payload: updatedChildren });
  };

  return (
    <div className="mb-6">
      <p className="mb-2">Are any of your children under the age of 18?*</p>
      <div className="flex gap-4">
        <button
          onClick={() =>
            dispatch({ type: "SET_UNDERAGE_CHILDREN", payload: true })
          }
          className={`${
            underageChildren ? "bg-blue-500 text-white" : "bg-gray-200"
          } py-2 px-4 rounded`}
        >
          Yes
        </button>
        <button
          onClick={() =>
            dispatch({ type: "SET_UNDERAGE_CHILDREN", payload: false })
          }
          className={`${
            !underageChildren ? "bg-blue-500 text-white" : "bg-gray-200"
          } py-2 px-4 rounded`}
        >
          No
        </button>
      </div>

      {underageChildren && (
        <div>
          <p className="mb-2">
            What are the full legal names of your underage children?*
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
                placeholder="Full name of child"
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
            + Add another child
          </button>
        </div>
      )}
    </div>
  );
};

export default UnderageSection;

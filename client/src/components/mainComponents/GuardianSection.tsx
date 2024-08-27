import React from "react";
import { useApiContext } from "../contextApi/ApiContext";
import Button from "./UI/Button";

const GuardianSection: React.FC = () => {
  const { state, dispatch } = useApiContext();
  const { guardians, underageChildren } = state;

  const handleAddGuardian = () => {
    dispatch({
      type: "SET_GUARDIANS",
      payload: [...guardians, { name: "", relationship: "Parent" }],
    });
  };

  const handleRemoveGuardian = (index: number) => {
    const updatedGuardians = guardians.filter((_, i) => i !== index);
    dispatch({ type: "SET_GUARDIANS", payload: updatedGuardians });
  };

  return (
    <>
      {underageChildren && (
        <div className="mb-6">
          <p className="mb-2">
            In order of preference, who would you like to be the child's
            guardian if your minor child is left parentless when you pass away?*
          </p>
          {guardians.map((guardian, index) => (
            <div key={index} className="mb-4">
              <input
                type="text"
                value={guardian.name}
                onChange={(e) => {
                  const newGuardians = [...guardians];
                  newGuardians[index].name = e.target.value;
                  dispatch({ type: "SET_GUARDIANS", payload: newGuardians });
                }}
                placeholder="Full name of first choice"
                className="border p-2 rounded w-full mb-2"
              />
              <input
                type="text"
                value={guardian.relationship}
                onChange={(e) => {
                  const newGuardians = [...guardians];
                  newGuardians[index].relationship = e.target.value;
                  dispatch({ type: "SET_GUARDIANS", payload: newGuardians });
                }}
                placeholder="Relationship"
                className="border p-2 rounded w-full"
              />
              {guardians.length > 1 && (
                <Button
                  design="text-red-500 mt-2"
                  text="Delete"
                  handleFunctionality={() => handleRemoveGuardian(index)}
                />
              )}
            </div>
          ))}
          <Button
            design="text-blue-500"
            text="+ Click to add another"
            handleFunctionality={handleAddGuardian}
          />
        </div>
      )}
    </>
  );
};

export default GuardianSection;

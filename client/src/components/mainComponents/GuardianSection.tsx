import React from "react";
import { useApiContext } from "../contextApi/ApiContext";

const GuardianSection: React.FC = () => {
  const { state, dispatch } = useApiContext();
  const { guardians } = state;

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
    <div className="mb-6">
      <p className="mb-2">
        In order of preference, who would you like to be the child's guardian if
        your minor child is left parentless when you pass away?*
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
            <button
              onClick={() => handleRemoveGuardian(index)}
              className="text-red-500 mt-2"
            >
              Delete
            </button>
          )}
        </div>
      ))}
      <button onClick={handleAddGuardian} className="text-blue-500">
        + Click to add another
      </button>
    </div>
  );
};

export default GuardianSection;

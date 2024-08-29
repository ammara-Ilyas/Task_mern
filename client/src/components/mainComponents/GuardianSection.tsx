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
        <div className="mb-6 w-[348px] flex flex-col justify-between ">
          <p className="text-[18px] ">
            In order of preference, who would you like to be the child's
            guardian if your minor child is left parentless when you pass away?*
          </p>
          <div className=" flex flex-col justify-between ">
            {guardians.map((guardian, index) => (
              <div key={index} className="mb-4">
                <div className=" ">
                  {" "}
                  <input
                    type="text"
                    value={guardian.name}
                    onChange={(e) => {
                      const newGuardians = [...guardians];
                      newGuardians[index].name = e.target.value;
                      dispatch({
                        type: "SET_GUARDIANS",
                        payload: newGuardians,
                      });
                    }}
                    placeholder="Full name of first choice"
                    className="border-2 rounded-md placeholder:font-semibold p-2  w-full mb-2"
                  />
                </div>
                <div className="mt-1 ">
                  <p className="text-[18px] font-semibold px-2">Relationship</p>
                  <input
                    type="text"
                    value={guardian.relationship}
                    onChange={(e) => {
                      const newGuardians = [...guardians];
                      newGuardians[index].relationship = e.target.value;
                      dispatch({
                        type: "SET_GUARDIANS",
                        payload: newGuardians,
                      });
                    }}
                    placeholder="Parent"
                    className="border-2 outline-none p-2   rounded-md w-full"
                  />
                </div>
                {guardians.length > 1 && (
                  <Button
                    design="text-red-500  float-right mt-2 mr-2 "
                    text="Delete"
                    handleFunctionality={() => handleRemoveGuardian(index)}
                  />
                )}
              </div>
            ))}
          </div>
          <Button
            design="text-cyan-300 border-2 border-cyan-300 rounded-md border-dashed py-2"
            text="+ Click to add another"
            handleFunctionality={handleAddGuardian}
          />
        </div>
      )}
    </>
  );
};

export default GuardianSection;

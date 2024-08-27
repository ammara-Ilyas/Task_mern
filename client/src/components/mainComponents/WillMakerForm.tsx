import React from "react";
import { useApiContext } from "../contextApi/ApiContext";
import ChildrenSection from "./ChildrenSection";
import UnderageSection from "./UnderageSection";
import GuardianSection from "./GuardianSection";

const WillMakerForm: React.FC = () => {
  const { state, saveData } = useApiContext();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = {
      hasChildren: state.hasChildren,
      children: state.children,
      underageChildren: state.underageChildren,
      guardians: state.guardians,
    };

    console.log("Form data:", formData);

    if (typeof saveData === "function") {
      saveData(formData);
    } else {
      console.error("saveData is undefined or not a function");
    }

    console.log("Form submitted!");
  };

  return (
    <form className="p-4" onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">
        Children and Guardianship of Minors
      </h2>

      <ChildrenSection />
      <UnderageSection />
      <GuardianSection />

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded w-full"
      >
        Save & Continue
      </button>
    </form>
  );
};

export default WillMakerForm;

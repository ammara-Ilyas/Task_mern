import React from "react";
import ChildrenSection from "./ChildrenSection";
import UnderageSection from "./UnderageSection";
import GuardianSection from "./GuardianSection";

const WillMakerForm: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">
        Children and Guardianship of Minors
      </h2>

      <ChildrenSection />

      <UnderageSection />

      <GuardianSection />

      <button className="bg-blue-500 text-white py-2 px-4 rounded w-full">
        Save & Continue
      </button>
    </div>
  );
};

export default WillMakerForm;

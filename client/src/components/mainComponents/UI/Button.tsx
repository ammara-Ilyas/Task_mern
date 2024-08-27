import React from "react";

interface ButtonProps {
  design: string;
  text: string;
  handleFunctionality: () => void;
}

const Button: React.FC<ButtonProps> = ({
  design,
  text,
  handleFunctionality,
}) => {
  return (
    <button type="button" onClick={handleFunctionality} className={design}>
      {text}
    </button>
  );
};

export default Button;

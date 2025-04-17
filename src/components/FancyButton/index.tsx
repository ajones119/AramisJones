import { ReactNode } from "react";
import "./FancyButton.css";

type FancyButtonProps = {
  onClick: () => void;
  children: ReactNode;
};

const FancyButton = ({ onClick, children }: FancyButtonProps) => {
  return (
    <div className="flex items-center justify-center">
      <button className="fancy-button-wrapper" onClick={onClick}>
        <div className="fancy-button">{children}</div>
      </button>
    </div>
  );
};

export default FancyButton;

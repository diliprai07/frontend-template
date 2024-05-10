import * as React from "react";
type Props = {
  message: string;
  onClose: () => void;
};
const SuccessMessage: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div className="success-mesaage">
      <span>{message}</span>
      <button
        className="button-primary-outlined close-button"
        onClick={onClose}
      >
        X
      </button>
    </div>
  );
};

export default SuccessMessage;

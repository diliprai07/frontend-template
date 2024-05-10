import * as React from "react";
type Props = {
  message: string;
  onClose: () => void;
};
const ErrorMessage: React.FC<Props> = ({ message, onClose }) => {
  return (
    <div className="error-message">
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

export default ErrorMessage;

import * as React from "react";

type Props = {
  message?: string;
};
const ValidationErrorMessage: React.FC<Props> = ({ message }) => {
  return <>{message ? <div className="error">{message}</div> : null}</>;
};

export default ValidationErrorMessage;

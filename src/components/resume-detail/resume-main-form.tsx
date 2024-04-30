import * as React from "react";
import { RESUME_FORM_STEPPER_DETAIL } from "./constant";
const ResumeMainForm = () => {
  const [resumeFormSteps, setResumeFormSteps] = React.useState<
    Record<string, string>
  >({
    [`${RESUME_FORM_STEPPER_DETAIL.introduction}`]:
      RESUME_FORM_STEPPER_DETAIL.introduction,
  });

  const onHandleStepChange = (value: string) => {
    setResumeFormSteps((val) => {
      return { ...val, [`${value}`]: value };
    });
  };
  return (
    <div className="resume-main-form-stepper">
      <ul className="stepper">
        <li
          onClick={() => {
            onHandleStepChange(RESUME_FORM_STEPPER_DETAIL.introduction);
          }}
          className={
            resumeFormSteps.hasOwnProperty(
              RESUME_FORM_STEPPER_DETAIL.introduction
            )
              ? "active"
              : ""
          }
        >
          Introduction
        </li>
        <li
          onClick={() => {
            onHandleStepChange(RESUME_FORM_STEPPER_DETAIL.education);
          }}
          className={
            resumeFormSteps.hasOwnProperty(RESUME_FORM_STEPPER_DETAIL.education)
              ? "active"
              : ""
          }
        >
          Education
        </li>
        <li
          onClick={() => {
            onHandleStepChange(RESUME_FORM_STEPPER_DETAIL.work_experience);
          }}
          className={
            resumeFormSteps.hasOwnProperty(
              RESUME_FORM_STEPPER_DETAIL.work_experience
            )
              ? "active"
              : ""
          }
        >
          Work Experience
        </li>
        <li
          onClick={() => {
            onHandleStepChange(RESUME_FORM_STEPPER_DETAIL.projects);
          }}
          className={
            resumeFormSteps.hasOwnProperty(RESUME_FORM_STEPPER_DETAIL.projects)
              ? "active"
              : ""
          }
        >
          Projects
        </li>
        <li
          onClick={() => {
            onHandleStepChange(RESUME_FORM_STEPPER_DETAIL.achievements);
          }}
          className={
            resumeFormSteps.hasOwnProperty(
              RESUME_FORM_STEPPER_DETAIL.achievements
            )
              ? "active"
              : ""
          }
        >
          Achievements
        </li>
      </ul>
      <div className="resume-form-container">
        <div>
          <label>Full Name</label>
          <input></input>
        </div>
        <div>
          <label>Email</label>
          <input></input>
        </div>
        <div>
          <label>Address</label>
          <input></input>
        </div>
      </div>
    </div>
  );
};

export default ResumeMainForm;

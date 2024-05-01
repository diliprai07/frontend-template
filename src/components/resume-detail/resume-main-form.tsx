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
        <div className="resume-form-input">
          <label className="display-block required">Full Name</label>
          <input
            type="text"
            placeholder="Full Name"
            className="width-full"
          ></input>
        </div>
        <div className="resume-form-input">
          <label className="display-block required">Email</label>
          <input type="text" className="width-full"></input>
        </div>
        <div className="resume-form-input">
          <label className="display-block required">Phone Number</label>
          <input
            type="text"
            placeholder="Full Name"
            className="width-full"
          ></input>
        </div>
        <div className="resume-form-input">
          <label className="display-block required">Address</label>
          <input type="text" className="width-full"></input>
        </div>
        <div className="resume-form-introduction">
          <label className="display-block required">Introduction</label>
          <textarea className="width-full"></textarea>
        </div>

        <div className="continue-button">
          <button className="button-danger">Continue</button>
        </div>
      </div>
    </div>
  );
};

export default ResumeMainForm;

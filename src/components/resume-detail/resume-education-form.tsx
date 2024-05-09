import * as React from "react";
import ValidationErrorMessage from "../ui/validation-error-message";
import { RESUME_FORM_STEPPER_DETAIL } from "./constant";

type Props = {
  errors: any;
  register: any;
  handleContinue: (nextFormName: string) => void;
  currentForm: string;
};

const ResumeEducationForm: React.FC<Props> = ({
  errors,
  register,
  handleContinue,
  currentForm,
}) => {
  // institution: "",
  //         board: "",
  //         startDateYear: "",
  //         score: "",
  //         scoreType: "",
  //         remarks: "",
  return (
    <div className="resume-form-container">
      <h3 className="width-80">{currentForm}</h3>
      <div className="resume-form-input">
        <label className="display-block required">Institution Name</label>
        <input
          type="text"
          placeholder="Institution Name"
          className="width-full"
          {...register("education.institution")}
        ></input>
        <ValidationErrorMessage
          message={errors?.education?.institution?.message ?? ""}
        />
      </div>
      <div className="resume-form-input">
        <label className="display-block required">Board</label>

        <input
          type="text"
          className="width-full"
          {...register("education.board")}
          placeholder="Board"
        ></input>
        <ValidationErrorMessage
          message={errors?.education?.board?.message ?? ""}
        />
      </div>
      <div className="resume-form-input">
        <label className="display-block required">Start date year</label>
        <input
          type="text"
          placeholder="Start date year"
          className="width-full"
          {...register("education.startDateYear")}
        ></input>
        <ValidationErrorMessage
          message={errors?.education?.startDateYear?.message ?? ""}
        />
      </div>
      <div className="resume-form-input">
        <label className="display-block">End date year (optional)</label>
        <input
          type="text"
          placeholder="Start date year"
          className="width-full"
          {...register("education.endDateYear")}
        ></input>
        {/* <ValidationErrorMessage
          message={errors?.education?.phoneNumber?.message ?? ""}
        /> */}
      </div>
      <div className="resume-form-input">
        <label className="display-block required">Score</label>
        <input
          type="text"
          className="width-full"
          {...register("education.score")}
          placeholder="Score"
        ></input>
        <ValidationErrorMessage
          message={errors?.education?.score?.message ?? ""}
        />
      </div>
      <div className="resume-form-input">
        <label className="display-block required">Score Type</label>
        <input
          type="text"
          className="width-full"
          {...register("education.scoreType")}
          placeholder="Score Type"
        ></input>
        <ValidationErrorMessage
          message={errors?.education?.scoreType?.message ?? ""}
        />
      </div>

      <div className="resume-form-input">
        <label className="display-block required">Remarks</label>
        <textarea
          className="width-full"
          {...register("education.remarks")}
          placeholder="Introduction"
        ></textarea>
        <ValidationErrorMessage
          message={errors?.education?.remarks?.message ?? ""}
        />
      </div>

      <div className="continue-button">
        <button
          className="button-primary-filled"
          onClick={() => {
            handleContinue(RESUME_FORM_STEPPER_DETAIL.work_experience);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResumeEducationForm;

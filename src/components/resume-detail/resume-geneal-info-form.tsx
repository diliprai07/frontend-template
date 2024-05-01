import * as React from "react";
import ValidationErrorMessage from "../ui/validation-error-message";
import { RESUME_FORM_STEPPER_DETAIL } from "./constant";

type Props = {
  errors: any;
  register: any;
  handleContinue: (nextFormName: string) => void;
  currentForm: string;
};

const ResumeGeneralInfoFom: React.FC<Props> = ({
  errors,
  register,
  handleContinue,
  currentForm,
}) => {
  return (
    <div className="resume-form-container">
      <h3 className="width-80">{currentForm}</h3>
      <div className="resume-form-input">
        <label className="display-block required">Full Name</label>
        <input
          type="text"
          placeholder="Full Name"
          className="width-full"
          {...register("generalInformation.fullName")}
        ></input>
        <ValidationErrorMessage
          message={errors?.generalInformation?.fullName?.message ?? ""}
        />
      </div>
      <div className="resume-form-input">
        <label className="display-block required">Email</label>

        <input
          type="text"
          className="width-full"
          {...register("generalInformation.email")}
          placeholder="Email"
        ></input>
        <ValidationErrorMessage
          message={errors?.generalInformation?.email?.message ?? ""}
        />
      </div>
      <div className="resume-form-input">
        <label className="display-block required">Phone Number</label>
        <input
          type="text"
          placeholder="Phone Number"
          className="width-full"
          {...register("generalInformation.phoneNumber")}
        ></input>
        <ValidationErrorMessage
          message={errors?.generalInformation?.phoneNumber?.message ?? ""}
        />
      </div>
      <div className="resume-form-input">
        <label className="display-block required">Date of Birth</label>
        <input
          type="text"
          className="width-full"
          {...register("generalInformation.birthDate")}
          placeholder="Date of Birth"
        ></input>
        <ValidationErrorMessage
          message={errors?.generalInformation?.birthDate?.message ?? ""}
        />
      </div>
      <div className="resume-form-input">
        <label className="display-block required">Address</label>
        <input
          type="text"
          className="width-full"
          {...register("generalInformation.address")}
          placeholder="Address"
        ></input>
        <ValidationErrorMessage
          message={errors?.generalInformation?.address?.message ?? ""}
        />
      </div>

      <div className="resume-form-input">
        <label className="display-block required">Introduction</label>
        <textarea
          className="width-full"
          {...register("generalInformation.introduction")}
          placeholder="Introduction"
        ></textarea>
        <ValidationErrorMessage
          message={errors?.generalInformation?.introduction?.message ?? ""}
        />
      </div>

      <div className="continue-button">
        <button
          className="button-primary-filled"
          onClick={() => {
            handleContinue(RESUME_FORM_STEPPER_DETAIL.education);
          }}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default ResumeGeneralInfoFom;

import * as React from "react";
import ValidationErrorMessage from "../ui/validation-error-message";
import { RESUME_FORM_STEPPER_DETAIL } from "./constant";
import { Control, FieldErrors, useFieldArray } from "react-hook-form";
import { FormSchema } from "./resume-main-form";
import { ErrorMessage } from "@hookform/error-message";

type Props = {
  errors: FieldErrors<FormSchema>;
  register: any;
  handleContinue: () => void;
  currentForm: string;
  control: Control<FormSchema, any>;
};

const ResumeWorkExperienceFom: React.FC<Props> = ({
  errors,
  register,
  handleContinue,
  currentForm,
  control,
}) => {
  // Work Experience Detail of the user.
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormProvider)
      name: "workExperience", // unique name for your Field Array
    }
  );

  return (
    <div className="resume-form-container">
      <h3 className="width-80">{currentForm}</h3>
      <button
        className="button-primary-outlined"
        onClick={() => {
          append({
            startDateYear: "",
            startMonth: "",
            endDateYear: "",
            endMonth: "",
            designation: "",
            organizationName: "",
            tools: "",
            responsibilities: "",
          });
        }}
      >
        +
      </button>
      {fields?.map((field, index) => (
        <React.Fragment>
          <div className="resume-form-input">
            <label className="display-block required">Organization</label>
            <input
              type="text"
              placeholder="Full Name"
              className="width-full"
              {...register(`workExperience.${index}.organizationName`)}
            ></input>
            <ErrorMessage
              errors={errors}
              name={`workExperience.${index}.organizationName`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block required">Start date year</label>

            <input
              type="text"
              className="width-full"
              {...register(`workExperience.${index}.startDateYear`)}
              placeholder="Start date year"
            ></input>
            <ErrorMessage
              errors={errors}
              name={`workExperience.${index}.startDateYear`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block required">Start month</label>

            <input
              type="text"
              className="width-full"
              {...register(`workExperience.${index}.startMonth`)}
              placeholder="Start month"
            ></input>
            <ErrorMessage
              errors={errors}
              name={`workExperience.${index}.startMonth`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block required">End date year</label>

            <input
              type="text"
              className="width-full"
              {...register(`workExperience.${index}.endDateYear`)}
              placeholder="End date year"
            ></input>
            <ErrorMessage
              errors={errors}
              name={`workExperience.${index}.endDateYear`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block required">End month</label>

            <input
              type="text"
              className="width-full"
              {...register(`workExperience.${index}.endMonth`)}
              placeholder="End Month"
            ></input>
            <ErrorMessage
              errors={errors}
              name={`workExperience.${index}.endMonth`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block required">Designation</label>

            <input
              type="text"
              className="width-full"
              {...register(`workExperience.${index}.designation`)}
              placeholder="Designation"
            ></input>
            <ErrorMessage
              errors={errors}
              name={`workExperience.${index}.designation`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block required">Tools</label>

            <input
              type="text"
              className="width-full"
              {...register(`workExperience.${index}.tools`)}
              placeholder="Tools"
            ></input>
            <ErrorMessage
              errors={errors}
              name={`workExperience.${index}.tools`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block required">Responsibilities</label>

            <textarea
              type="text"
              className="width-full"
              {...register(`workExperience.${index}.responsibilities`)}
              placeholder="Responsibilities"
            ></textarea>
            <ErrorMessage
              errors={errors}
              name={`workExperience.${index}.responsibilities`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
        </React.Fragment>
      ))}

      <div className="continue-button">
        <button
          className="button-primary-filled"
          onClick={() => {
            handleContinue();
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ResumeWorkExperienceFom;

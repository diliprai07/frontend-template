import * as React from "react";
import ValidationErrorMessage from "../ui/validation-error-message";
import { RESUME_FORM_STEPPER_DETAIL } from "./constant";
import { Control, FieldErrors, useFieldArray } from "react-hook-form";
import { FormSchema } from "./resume-main-form";
import { ErrorMessage } from "@hookform/error-message";

type Props = {
  errors: FieldErrors<FormSchema>;
  register: any;
  handleContinue: (nextFormName: string) => void;
  currentForm: string;
  control: Control<FormSchema, any>;
};

const ResumeEducationForm: React.FC<Props> = ({
  errors,
  register,
  handleContinue,
  currentForm,
  control,
}) => {
  // Education Detail of the user.
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormProvider)
      name: "education", // unique name for your Field Array
    }
  );

  return (
    <div className="resume-form-container">
      <h3 className="width-80">{currentForm}</h3>
      <button
        className="button-primary-outlined"
        onClick={() => {
          console.log("HELLO");
          append({
            institution: "",
            board: "",
            startDateYear: "",
            endDateYear: "",
            score: "",
            scoreType: "",
            remarks: "",
          });
        }}
      >
        +
      </button>
      {fields?.map((field, index) => (
        <React.Fragment key={field.id}>
          <div className="resume-form-input">
            <label className="display-block required">Institution Name</label>
            <input
              type="text"
              placeholder="Institution Name"
              className="width-full"
              {...register(`education.${index}.institution`)}
            ></input>
            <ErrorMessage
              errors={errors}
              name={`education.${index}.institution`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block required">Board</label>

            <input
              type="text"
              className="width-full"
              {...register(`education.${index}.board`)}
              placeholder="Board"
            ></input>
            <ErrorMessage
              errors={errors}
              name={`education.${index}.board`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block required">Start date year</label>
            <input
              type="text"
              placeholder="Start date year"
              className="width-full"
              {...register(`education.${index}.startDateYear`)}
            ></input>
            <ErrorMessage
              errors={errors}
              name={`education.${index}.startDateYear`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block">End date year (optional)</label>
            <input
              type="text"
              placeholder="End date year"
              className="width-full"
              {...register(`education.${index}.endDateYear`)}
            ></input>
          </div>
          <div className="resume-form-input">
            <label className="display-block">Score</label>
            <input
              type="text"
              className="width-full"
              {...register(`education.${index}.score`)}
              placeholder="Score"
            ></input>
            <ErrorMessage
              errors={errors}
              name={`education.${index}.score`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>
          <div className="resume-form-input">
            <label className="display-block">Score Type</label>
            <input
              type="text"
              className="width-full"
              {...register(`education.${index}.scoreType`)}
              placeholder="Score Type"
            ></input>
            <ErrorMessage
              errors={errors}
              name={`education.${index}.scoreType`}
              render={({ message }) => (
                <ValidationErrorMessage message={message} />
              )}
            />
          </div>

          <div className="resume-form-input">
            <label className="display-block">Remarks</label>
            <textarea
              className="width-full"
              {...register(`education.${index}.remarks`)}
              placeholder="Introduction"
            ></textarea>
            <ErrorMessage
              errors={errors}
              name={`education.${index}.remarks`}
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

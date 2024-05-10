import * as React from "react";
import {
  RESUME_DETAIL_SAVE_SUCCESS_MESSAGE,
  RESUME_FORM_STEPPER_DETAIL,
} from "./constant";
import { useForm } from "react-hook-form";
import {
  EducationDto,
  GeneralInformationDto,
  WorkExperienceDto,
} from "../../models/resume-detail";
import { yupResolver } from "@hookform/resolvers/yup";
import { resumeMainFormValidationSchema } from "./resume-main-form-validation-schema";
import ValidationErrorMessage from "../ui/validation-error-message";
import ResumeGeneralInfoFom from "./resume-geneal-info-form";
import ResumeEducationForm from "./resume-education-form";
import ResumeWorkExperienceFom from "./resume-wok-experience";
// import { baseRepository } from "../../repositories/base";
import { API_END_POINTS } from "../../utils/api/endpoints";
import SuccessMessage from "../ui/success-message";
import { baseRepository } from "../../repositories/base";
import { API_ERROR_MESSAGE } from "../../utils/app-constant";
import ErrorMessage from "../ui/error-message";

export type FormSchema = {
  generalInformation: GeneralInformationDto;
  education: EducationDto[];
  workExperience: WorkExperienceDto[];
};
const ResumeMainForm = () => {
  const [resumeFormSteps, setResumeFormSteps] = React.useState<
    Record<string, string>
  >({
    [`${RESUME_FORM_STEPPER_DETAIL.introduction}`]:
      RESUME_FORM_STEPPER_DETAIL.introduction,
  });
  const [successMessage, setSuccessMessage] = React.useState<string>("");
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [currentFormSteps, setCurrentResumeSteps] = React.useState<string>(
    RESUME_FORM_STEPPER_DETAIL.introduction
  );
  // Assign initial values of form Schema;
  const {
    register,
    setValue,
    handleSubmit,
    control,
    trigger,
    watch,
    formState: { errors },
  } = useForm<FormSchema>({
    shouldUnregister: false,
    mode: "onChange",
    // @ts-ignore
    resolver: yupResolver(resumeMainFormValidationSchema),
    defaultValues: {
      generalInformation: {
        email: "",
        phoneNumber: "",
        fullName: "",
        address: "",
        introduction: "",
        birthDate: "",
      },
      education: [
        {
          institution: "",
          board: "",
          startDateYear: "",
          score: "",
          scoreType: "",
          remarks: "",
        },
      ],
      workExperience: [
        {
          startDateYear: "",
          startMonth: "",
          endDateYear: "",
          endMonth: "",
          designation: "",
          organizationName: "",
          tools: "",
          responsibilities: "",
        },
      ],
    },
  });

  const onHandleStepChange = (value: string) => {
    setResumeFormSteps((val) => {
      return { ...val, [`${value}`]: value };
    });
    setCurrentResumeSteps((val) => {
      return value;
    });
  };

  console.log(errors);
  const onSubmit = handleSubmit((values: FormSchema) => {
    console.log(values);
    baseRepository
      .post(API_END_POINTS.save_resume, values)
      .then((res) => {
        setSuccessMessage(RESUME_DETAIL_SAVE_SUCCESS_MESSAGE);
        setErrorMessage("");
      })
      .catch((error) => {
        setSuccessMessage("");
        setErrorMessage(error?.message ?? API_ERROR_MESSAGE);
      });
  });

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
        {/* <li
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
        </li> */}
      </ul>
      {successMessage && (
        <SuccessMessage
          message={successMessage}
          onClose={() => {
            setSuccessMessage("");
          }}
        />
      )}
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          onClose={() => {
            setErrorMessage("");
          }}
        />
      )}
      {currentFormSteps === RESUME_FORM_STEPPER_DETAIL.introduction ? (
        <ResumeGeneralInfoFom
          errors={errors}
          register={register}
          handleContinue={async (nextFormName) => {
            const isTrigger = await trigger(["generalInformation"]);
            if (isTrigger) {
              onHandleStepChange(nextFormName);
            }
          }}
          currentForm={currentFormSteps}
        />
      ) : currentFormSteps === RESUME_FORM_STEPPER_DETAIL.education ? (
        <ResumeEducationForm
          errors={errors}
          register={register}
          handleContinue={async (nextFormName) => {
            const isTrigger = await trigger(["education"]);
            if (isTrigger) {
              onHandleStepChange(nextFormName);
            }
          }}
          control={control}
          currentForm={currentFormSteps}
        />
      ) : (
        currentFormSteps === RESUME_FORM_STEPPER_DETAIL.work_experience && (
          <ResumeWorkExperienceFom
            errors={errors}
            register={register}
            handleContinue={onSubmit}
            control={control}
            currentForm={currentFormSteps}
          />
        )
      )}
    </div>
  );
};

export default ResumeMainForm;

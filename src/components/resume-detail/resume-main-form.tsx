import * as React from "react";
import { RESUME_FORM_STEPPER_DETAIL } from "./constant";
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
type FormSchema = {
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

  const [currentFormSteps, setCurrentResumeSteps] = React.useState<string>(
    RESUME_FORM_STEPPER_DETAIL.introduction
  );
  // Assign initial values of form Schema;
  const {
    register,
    setValue,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm<FormSchema>({
    shouldUnregister: true,
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

  const onSubmit = handleSubmit((values: FormSchema) => {
    console.log(values);
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
      {currentFormSteps === RESUME_FORM_STEPPER_DETAIL.introduction ? (
        <ResumeGeneralInfoFom
          errors={errors}
          register={register}
          handleContinue={(nextFormName) => {
            onHandleStepChange(nextFormName);
          }}
          currentForm={currentFormSteps}
        />
      ) : currentFormSteps === RESUME_FORM_STEPPER_DETAIL.education ? (
        <ResumeEducationForm
          errors={errors}
          register={register}
          handleContinue={(nextFormName) => {
            onHandleStepChange(nextFormName);
          }}
          currentForm={currentFormSteps}
        />
      ) : (
        currentFormSteps === RESUME_FORM_STEPPER_DETAIL.work_experience && (
          <ResumeWorkExperienceFom
            errors={errors}
            register={register}
            handleContinue={(nextFormName) => {
              onHandleStepChange(nextFormName);
            }}
            currentForm={currentFormSteps}
          />
        )
      )}
    </div>
  );
};

export default ResumeMainForm;

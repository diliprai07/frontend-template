import * as Yup from "yup";
import {
  EDUCATION_VALIDATION_SCHEMA,
  GENERAL_INTRODUCTION_VALIDATION_SCHEMA,
  WORK_EXPERIENCE_VALIDATION_SCHEMA,
} from "./constant";
export const resumeMainFormValidationSchema = Yup.object().shape({
  generalInformation: Yup.object().shape({
    email: Yup.string().required(
      GENERAL_INTRODUCTION_VALIDATION_SCHEMA.emailRequired
    ),
    phoneNumber: Yup.string().required(
      GENERAL_INTRODUCTION_VALIDATION_SCHEMA.phoneNumberRequired
    ),
    fullName: Yup.string().required(
      GENERAL_INTRODUCTION_VALIDATION_SCHEMA.fullName
    ),
    introduction: Yup.string().required(
      GENERAL_INTRODUCTION_VALIDATION_SCHEMA.introduction
    ),
    birthDate: Yup.string().required(
      GENERAL_INTRODUCTION_VALIDATION_SCHEMA.birthDate
    ),
    address: Yup.string().required(
      GENERAL_INTRODUCTION_VALIDATION_SCHEMA.address
    ),
  }),
  education: Yup.array().of(
    Yup.object().shape({
      institution: Yup.string().required(
        EDUCATION_VALIDATION_SCHEMA.institution
      ),
      boad: Yup.string().required(EDUCATION_VALIDATION_SCHEMA.board),
      startDateYear: Yup.string().required(
        EDUCATION_VALIDATION_SCHEMA.startDateYear
      ),
    })
  ),
  workExperience: Yup.array().of(
    Yup.object().shape({
      designation: Yup.string().required(
        WORK_EXPERIENCE_VALIDATION_SCHEMA.designation
      ),
      organizationName: Yup.string().required(
        WORK_EXPERIENCE_VALIDATION_SCHEMA.organizationName
      ),
      startDateYear: Yup.string().required(
        WORK_EXPERIENCE_VALIDATION_SCHEMA.startDateYear
      ),
    })
  ),
});

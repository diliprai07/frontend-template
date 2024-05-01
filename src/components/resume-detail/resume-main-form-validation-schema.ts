import * as Yup from "yup";
import { GENERAL_INTRODUCTION_VALIDATION_SCHEMA } from "./constant";
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
});

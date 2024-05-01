export interface GeneralInformationDto {
  email: string;
  phoneNumber: string;
  fullName: string;
  address: string;
  introduction: string;
  birthDate: string;
}

export interface EducationDto {
  institution: string;
  board: string;
  startDateYear: string;
  score: string;
  scoreType: string;
  remarks: string;
}
export interface WorkExperienceDto {
  startDateYear: string;
  startMonth: string;
  endDateYear: string;
  endMonth: string;
  designation: string;
  organizationName: string;
  tools: string;
  responsibilities: string;
}
export interface ResumeDetailDto {}

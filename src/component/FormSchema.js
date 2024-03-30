import * as Yup from "yup";
const aadharNumberPattern = /^[0-9]{12}$/;

export const FormSchema = Yup.object({
 
  first_name: Yup.string().min(2).max(20).required("First Name is Must"),
  last_name: Yup.string().min(2).max(20).required("Last Name is Must"),
  username: Yup.string().min(2).max(50).required("UserName is Must"),
  email: Yup.string().email().required("Email is Must"),
  password: Yup.string()
    .required("password is Must")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Enter Strong Password"
    ),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),

  date_of_birth: Yup.date()
    .max(new Date(), "Date of birth cannot be in the future")
    .required("Date of birth is required"),

  address: Yup.string().required("Write the Address"),
  gender:Yup.string().required(),
  blood_group: Yup.string().required(),
  religion: Yup.string().required(),
  caste: Yup.string().required(),
  father_name: Yup.string().min(2).max(50).required("Father Name is Must"),
  father_education: Yup.string()
    .min(2)
    .max(50)
    .required("Father Education is Must"),
  father_profession: Yup.string()
    .min(2)
    .max(50)
    .required("Father Profession is Must"),
  father_designation: Yup.string()
    .min(2)
    .max(50)
    .required("Father Designation is Must"),
  mother_name: Yup.string().min(2).max(50).required("Mother Name is Must"),
  mother_education: Yup.string()
    .min(2)
    .max(50)
    .required("Mother Education is Must"),
  mother_profession: Yup.string()
    .min(2)
    .max(50)
    .required("Mother Profession is Must"),
  mother_designation: Yup.string()
    .min(2)
    .max(50)
    .required("Mother Designation is Must"),
  admission_no: Yup.number().required("Admission Number is required "),
  parent_contact: Yup.string()
    .matches(/^[0-9]{10}$/, "parent contact must be exactly 10 digits")
    .required("Parent Contact number is required"),
  aadhar_number: Yup.string()
  .matches(aadharNumberPattern, "Aadhar number must be exactly 12 digits")
  .required("Aadhar number is required"),

  parent_otp: Yup.string()
    .matches(/^[0-9]{4}$/, "OTP must be exactly 4 digits")
    .required("OTP is required"),

  class: Yup.number().max(12).required("class is required "),
  section: Yup.number().max(12).required("section  is required "),
  admission_date: Yup.date().required("select the date"),
  emergency_contact: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),
  medical_information: Yup.string().required("Mother Designation is Must"),
  other_fields: Yup.string().required("Mother Designation is Must"),

  parent_email: Yup.string().email().required("Email is Must"),
});

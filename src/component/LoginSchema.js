import * as Yup from "yup";


export const LoginSchema = Yup.object({
 
 
//   password: Yup.string()
//     .required("password is Must")
//     .matches(
//       /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
//       "Enter Strong Password"
//     ),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone number must be exactly 10 digits")
    .required("Phone number is required"),

 
  
  
 
  
 

  
});

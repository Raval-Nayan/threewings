import React, { useState } from "react";
import "./signup.css";
import { CiText } from "react-icons/ci";
import { NavLink } from "react-router-dom";
import { IoMdEyeOff } from "react-icons/io";
import { FormSchema } from "../FormSchema";
import { useFormik } from "formik";
import { useGlobalContext } from "../Contex/Contex";
const Signup = () => {

 

  const {Register}=useGlobalContext()
  const initialData = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    password: "",
    phone: "",

    date_of_birth: "",
    gender: "",
    address: "",
    blood_group: "",
    religion: "",
    caste: "",
    father_name: "",
    father_education: "",
    father_profession: "",
    father_designation: "",
    mother_name: "",
    mother_education: "",
    mother_profession: "",
    mother_designation: "",
    admission_no: "",
    parent_contact: "",
    aadhar_number: "",
    parent_otp: "",
    class: "",
    section: "",
    admission_date: "",
    emergency_contact: "",
    medical_information: "",
    other_fields: "",
    profile: {},
    father_photo: {},
    mother_photo: {},
    parent_email: "",
  };

  const { handleBlur, handleSubmit, handleChange, values, errors, touched } =
    useFormik({
      initialValues: initialData,
      validationSchema: FormSchema,

      onSubmit: (values) => {
        console.log(values);
       
      
        Register(values)
      },
    });

  return (
    <div className="containe_login border">
      <div className="row border w-100 h-100  ">
        <div className="col-md-9  col-mt-2 col-mt-0 ">
          <div className="border">
            <form onSubmit={handleSubmit} className="p-3">
              <h2 className="text-center">Create Account</h2>

              <div className="row ">
                <div className=" col-3 my-2 text_icon p-1 ">
                  <input
                    type="text"
                    name="first_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.first_name}
                    className="form-control  p-1    "
                    id="fname"
                    placeholder="First Name"
                  />
                  <CiText className="text_icons" />
                  {errors.first_name && touched.first_name ? (
                    <span>{errors.first_name}</span>
                  ) : null}
                </div>
                <div className="col-3 my-2 text_icon p-1 ">
                  <input
                    type="text"
                    name="last_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.last_name}
                    className="form-control input_style p-1    "
                    id="lname"
                    placeholder="Last Name"
                  />
                  <CiText className="text_icons" />
                  {errors.last_name && touched.last_name ? (
                    <span>{errors.last_name}</span>
                  ) : null}
                </div>

                <div className=" col-3 my-2 text_icon p-1 ">
                  <input
                    type="text"
                    name="username"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.username}
                    className="form-control input_style p-1    "
                    id="user"
                    placeholder="User Name"
                  />
                  <CiText className="text_icons" />
                  {errors.username && touched.username ? (
                    <span>{errors.username}</span>
                  ) : null}
                </div>

                <div className=" col-3 my-2 text_icon p-1">
                  <input
                    type="email"
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.email}
                    className="form-control input_style p-1   "
                    id="mail"
                    placeholder="Email Address"
                  />
                  <CiText className="text_icons" />
                  {errors.email && touched.email ? (
                    <span>{errors.email}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="password"
                    name="password"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.password}
                    className="form-control input_style p-1    "
                    id="pass"
                    placeholder="Password"
                  />
                  <IoMdEyeOff className="text_icons" />
                  {errors.password && touched.password ? (
                    <span>{errors.password}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="number"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    className="form-control input_style p-1    "
                    id="phone_number"
                    placeholder="Mobile Number"
                  />
                  <CiText className="text_icons" />
                  {errors.phone && touched.phone ? (
                    <span>{errors.phone}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="father_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.father_name}
                    className="form-control input_style p-1    "
                    id="fatherN"
                    placeholder="Father Name"
                  />
                  <CiText className="text_icons" />
                  {errors.father_name && touched.father_name ? (
                    <span>{errors.father_name}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="father_education"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.father_education}
                    className="form-control input_style p-1    "
                    id="fatherE"
                    placeholder="father Education"
                  />
                  <CiText className="text_icons" />
                  {errors.father_education && touched.father_education ? (
                    <span>{errors.father_education}</span>
                  ) : null}
                </div>
                <div className=" col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="father_profession"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.father_profession}
                    className="form-control input_style p-1   "
                    id="fatherP"
                    placeholder="father Profession"
                  />
                  <CiText className="text_icons" />
                  {errors.father_profession && touched.father_profession ? (
                    <span>{errors.father_profession}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="father_designation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.father_designation}
                    className="form-control input_style p-1    "
                    id="fatherD"
                    placeholder="father Designation"
                  />
                  <CiText className="text_icons" />
                  {errors.father_designation && touched.father_designation ? (
                    <span>{errors.father_designation}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="mother_name"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mother_name}
                    className="form-control input_style p-1    "
                    id="motherN"
                    placeholder="mother Name"
                  />
                  <CiText className="text_icons" />
                  {errors.mother_name && touched.mother_name ? (
                    <span>{errors.mother_name}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="mother_education"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mother_education}
                    className="form-control input_style p-1    "
                    id="motherE"
                    placeholder="mother Education"
                  />
                  <CiText className="text_icons" />
                  {errors.mother_education && touched.mother_education ? (
                    <span>{errors.mother_education}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="mother_profession"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mother_profession}
                    className="form-control input_style p-1    "
                    id="motherP"
                    placeholder="mother Profession"
                  />
                  <CiText className="text_icons" />
                  {errors.mother_profession && touched.mother_profession ? (
                    <span>{errors.mother_profession}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="mother_designation"
                    className="form-control input_style p-1    "
                    id="motherD"
                    placeholder="mother Designation"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.mother_designation}
                  />
                  <CiText className="text_icons" />
                  {errors.mother_designation && touched.mother_designation ? (
                    <span>{errors.mother_designation}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="number"
                    name="parent_contact"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.parent_contact}
                    className="form-control input_style p-1    "
                    id="Pcontact"
                    placeholder="parent Contact"
                  />
                  <CiText className="text_icons" />
                  {errors.parent_contact && touched.parent_contact ? (
                    <span>{errors.parent_contact}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="number"
                    name="aadhar_number"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.aadhar_number}
                    className="form-control input_style p-1    "
                    id="aadhar"
                    placeholder="Aadhar Number"
                  />
                  <CiText className="text_icons" />
                  {errors.aadhar_number && touched.aadhar_number ? (
                    <span>{errors.aadhar_number}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="number"
                    name="parent_otp"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.parent_otp}
                    className="form-control input_style p-1    "
                    id="otp"
                    placeholder="parent OTP"
                  />
                  <CiText className="text_icons" />
                  {errors.parent_otp && touched.parent_otp ? (
                    <span>{errors.parent_otp}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="number"
                    name="class"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.class}
                    className="form-control input_style p-1    "
                    id="Class"
                    placeholder="class"
                  />
                  <CiText className="text_icons" />
                  {errors.class && touched.class ? (
                    <span>{errors.class}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="number"
                    name="section"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.section}
                    className="form-control input_style p-1    "
                    id="sec"
                    placeholder="section"
                  />
                  <CiText className="text_icons" />
                  {errors.section && touched.section ? (
                    <span>{errors.section}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="number"
                    name="emergency_contact"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.emergency_contact}
                    className="form-control input_style p-1    "
                    id="Econtact"
                    placeholder="Emergency Contact"
                  />
                  <CiText className="text_icons" />
                  {errors.emergency_contact && touched.emergency_contact ? (
                    <span>{errors.emergency_contact}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="medical_information"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.medical_information}
                    className="form-control input_style p-1    "
                    id="medicalI"
                    placeholder="medical Information"
                  />
                  <CiText className="text_icons" />
                  {errors.medical_information && touched.medical_information ? (
                    <span>{errors.medical_information}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="other_fields"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.other_fields}
                    className="form-control input_style p-1    "
                    id="Ofields"
                    placeholder="Other Fields"
                  />
                  <CiText className="text_icons" />
                  {errors.other_fields && touched.other_fields ? (
                    <span>{errors.other_fields}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="text"
                    name="address"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.address}
                    className="form-control input_style p-1    "
                    id="addresss"
                    placeholder="Address"
                  />
                  <CiText className="text_icons" />
                  {errors.address && touched.address ? (
                    <span>{errors.address}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 text_icon">
                  <input
                    type="email"
                    name="parent_email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.parent_email}
                    className="form-control input_style p-1    "
                    id="Pemail"
                    placeholder="Parent Email"
                  />
                  <CiText className="text_icons" />
                  {errors.parent_email && touched.parent_email ? (
                    <span>{errors.parent_email}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2  ">
                  <select
                    name="gender"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.gender}
                    className="p-2 w-100  "
                  >
                    <option> Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                  {errors.gender && touched.gender ? (
                    <span>{errors.gender}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 ">
                  <select
                    name="blood_group"
                    className="p-2 w-100 "
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.blood_group}
                  >
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                  </select>
                  {errors.blood_group && touched.blood_group ? (
                    <span>{errors.blood_group}</span>
                  ) : null}
                </div>

                <div className="col-3 p-1 my-2 ">
                  <select
                    className=" p-2 w-100"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.religion}
                    name="religion"
                  >
                    <option value="">select</option>
                    <option value="Indian">Indian</option>
                    <option value="Pakistani">Pakistani</option>
                  </select>

                  {errors.religion && touched.religion ? (
                    <span>{errors.religion}</span>
                  ) : null}
                </div>
                <div className="col-3 p-1 my-2  ">
                  <select
                    name="caste"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.caste}
                    className="p-2 w-100  "
                  >
                    <option value=""> Caste</option>
                    <option value="Hindu">Hindu</option>
                    <option value="Muslim">Muslim</option>
                  </select>
                  {errors.caste && touched.caste ? (
                    <span>{errors.caste}</span>
                  ) : null}
                </div>

                <div className="col-4 p-1 my-2 border d-flex flex-column  ">
                  <label htmlFor="father_photo">Father Photo</label>

                  <input
                    type="file"
                    name="father_photo"
                    onBlur={handleBlur}
                    onChange={handleChange}
                   
                    className="form-control input_style  border-0 p-0   "
                    id="Fphoto"
                    placeholder="Father Photo"
                 
                  />
               
                </div>

                <div className="col-4 p-1 my-2 border  d-flex flex-column ">
                  <label htmlFor="mother_photo" className="p-1">
                    Mother Photo
                  </label>
                  
                  
                  <input
                    type="file"
                    name="mother_photo"
                    onBlur={handleBlur}
                    onChange={handleChange}
               
                    className="form-control input_style  border-0 p-0    "
                    id="Mphoto"
                    placeholder="Mother Photo"
                  />

                
                 
                </div>

                <div className="col-4 p-1 my-2 d-flex border flex-column">
                  <label htmlFor="profile" className="p-1">Profile</label>
                  <input
                    onBlur={handleBlur}
                    onChange={handleChange}
                    
                    type="file"
                    name="profile"
                    className="form-control input_style  border-0 p-0   "
                    id="pro"
                   
                    placeholder="Profile"
                  />
                 
                </div>

                <div className="col-3 p-1 my-4 text_icon">
                  <input
                    type="number"
                    name="admission_no"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.admission_no}
                    className="form-control input_style p-1    "
                    id="Ano"
                    placeholder="Admission No"
                  />
                  <CiText className="text_icons" />
                  {errors.admission_no && touched.admission_no ? (
                    <span>{errors.admission_no}</span>
                  ) : null}
                </div>

                <div className="col-3 my-2 ">
                  <label htmlFor="admission_date">Admission Date</label>

                  <input
                    type="date"
                    name="admission_date"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.admission_date}
                    className="form-control input_style p-1    "
                    id="Adate"
                    placeholder="Admission Date"
                  />
                  {errors.admission_date && touched.admission_date ? (
                    <span>{errors.admission_date}</span>
                  ) : null}
                </div>
                <div className="col-3 p-1 my-2 ">
                  <label htmlFor="date_of_birth">Date Of Birth</label>
                  <input
                    type="date"
                    name="date_of_birth"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.date_of_birth}
                    className="form-control input_style p-1    "
                    id="Dbirth"
                    placeholder="Date Of Birth"
                  />
                  {errors.date_of_birth && touched.date_of_birth ? (
                    <span>{errors.date_of_birth}</span>
                  ) : null}
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button type="submit" className="sign_btns ">
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-3 ">
          <div className="login_bg_color">
            <div className="login_left_inner">
              <div className="w-100 mb-2">
                {" "}
                <img
                  src="images/splash-screen.png"
                  className="img-fluid"
                  alt="splash"
                ></img>
              </div>

              <div className="login_right_text w-80 h-100">
                <p className="p_text mb-5">
                  Welcome back to the best. for you We're always here, wait for
                  you.
                </p>
                <h6 className="mb-2">
                  {" "}
                  <NavLink className="navstyle" to="/signup">
                    Don't have an account
                  </NavLink>
                </h6>

                <button className="sign_btn  ">signup</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

import React, { useEffect } from "react";
import "./profile.css";

import { MdErrorOutline } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { BiError } from "react-icons/bi";
import { useGlobalContext } from "../Contex/Contex";
const Profile = () => {
  const { ProfileDataFun, profileData } = useGlobalContext();
  const url = `http://instimattress.thethreewings.com/api/getStudent-Data`;
  useEffect(() => {
    ProfileDataFun(url);
  }, []);

  if (!profileData || !profileData.data) {
    return <div>Loading...</div>;
  }

  const data = profileData.data;
  const { first_name, last_name, profile, phone, username, user_type, email } =
    data;

  const studentinfo = profileData.data.student;
  const {
    date_of_birth,
    gender,
    address,
    admission_no,
    blood_group,
    religion,
    caste,
    father_name,
    father_education,
    father_profession,
    father_designation,
    father_photo,
    mother_name,
    mother_phone,
    mother_education,
    mother_profession,
    mother_designation,
    mother_photo,
    parent_contact,
    parent_email,
    current_standard,
    favorite_subject,
    aadhar_number,
    emergency_contact,
    medical_information,
    other_fields,
    state,
    city,
  } = studentinfo;

  const mediuminfo = profileData.data.student.medium;
  const { name } = mediuminfo;

  const stdinfo = profileData.data.student.std;
  const { title, description } = stdinfo;

  console.log(data, "data");
  console.log(profileData);

  return (
    <div className="d-flex gap-1 w-100 h-100">
      <div className="d-flex flex-column w-25 p-2 ">
        <img
          className="img-fluid w-100 border-top border-info pt-2"
          src={profile}
          alt="Student"
          onError={(event)=>{event.target.src="../images/student.jpg"; event.onerror = null;}}
        />
        
        <label className="name ">
          {username}( {profileData.user_type})
        </label>
        <label className="">+91{phone}</label>
        <label>{email}</label>
        <div className="d-flex justify-content-between  bg-secondary p-2 rounded">
          <label className="">Standard</label>
          <label className="name">{title}</label>
        </div>
        <div className="d-flex justify-content-between bg-secondary  p-2 mt-1 rounded">
          <label>Medium</label>
          <label className="name">{name}</label>
        </div>
      </div>

      <div className="d-flex flex-column gap-1  w-100">
        <div className="d-flex flex-column gap-1 w-100">
          <div className="d-flex icon justify-content-start align-items-start gap-1  mt-2">
            <MdErrorOutline className="" />
            <h2>About</h2>
          </div>

          <div className="d-flex gap-1 mt-2 ">
            <div className=" w-50">
              <div className="d-flex justify-content-between p-2 ">
                <label className="name">First Name</label>
                <label>{first_name}</label>
              </div>

              <div className="d-flex justify-content-between p-2">
                <label className="name">Gender</label>
                <label>{gender}</label>
              </div>

              <div className="d-flex justify-content-between p-2">
                <label className="name">Current Address</label>
                <label>{current_standard}</label>
              </div>

              <div className="d-flex justify-content-between p-2">
                <label className="name">Email</label>
                <label>{email}</label>
              </div>

              <div className="d-flex justify-content-between p-2">
                <label className="name">Father Name</label>
                <label>{father_name}</label>
              </div>
            </div>
            <div className=" w-50">
              <div className="d-flex justify-content-between p-2">
                <label className="name">Last Name</label>
                <label>{last_name}</label>
              </div>
              <div className="d-flex justify-content-between p-2">
                <label className="name">Contact No.</label>
                <label>{phone}</label>
              </div>

              <div className="d-flex justify-content-between p-2">
                <label className="name">Birth Date</label>
                <label>{date_of_birth}</label>
              </div>

              <div className="d-flex justify-content-between p-2">
                <label className="name">Blood Group</label>
                <label>{blood_group}</label>
              </div>

              <div className="d-flex justify-content-between p-2">
                <label className="name">Mother Name</label>
                <label>{mother_name}</label>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column gap-1 w-100">
          <div className="d-flex icon justify-content-start align-items-start gap-1  mt-2">
            <MdCastForEducation />
            <h2>Education Report</h2>
          </div>

          <div className=" d-flex flex-column  justify-content-center align-items-center p-5 w-100 ">
            <BiError className="icon" />
            <h2>No Data Avaliable</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

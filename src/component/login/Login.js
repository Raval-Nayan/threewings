import React from "react";
import "./Login.css";
import { IoIosCall } from "react-icons/io";
import { FaRegEyeSlash } from "react-icons/fa";

import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginSchema } from "../LoginSchema";
import { useGlobalContext } from "../Contex/Contex";

const Login = () => {
  const navigate = useNavigate();

  const { LoginFun } = useGlobalContext();
  const initialData = {
    phone: "",
    password: "",
  };

  const { handleBlur, handleChange, handleSubmit, touched, errors } = useFormik(
    {
      initialValues: initialData,
      validationSchema: LoginSchema,
      onSubmit: async (values) => {
        try {
          await LoginFun(values);
          // If login is successful, navigate to the desired page
          navigate("/home");
        } catch (error) {
          console.log(error);
          // Handle login error here
        }
      },
    }
  );
  return (
    <div className="containe_login border">
      <div className="row border w-100 h-100  ">
        <div className="col-md-5 ">
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
                <NavLink to="/signup">
                  <button className="sign_btn  ">signup</button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7  col-mt-2 col-mt-0 ">
          <div className="form_main">
            <form onSubmit={handleSubmit}>
              <h2 className="text-center mb-5 ">Login</h2>

              <div className="  border input_icons_main ">
                <input
                  type="number"
                  className="form-control input_style p-3    "
                  id="phonenumber"
                  placeholder="Mobile Number"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />

                <IoIosCall className="input_iconss" />

                {errors.phone && touched.phone ? (
                  <span>{errors.phone}</span>
                ) : null}
              </div>

              <div className="mt-3 eye_icon">
                <input
                  type="text"
                  className="form-control input_style p-3  "
                  id="pass"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <FaRegEyeSlash className="eye_icons" />
                <NavLink>
                  <span className="d-flex justify-content-end text-secondary">
                    Forgot Password?
                  </span>
                </NavLink>
              </div>

              <div className="d-flex flex-column  align-items-center justify-content-center mt-5">
                <button type="submit" className="sign_btns ">
                  Login
                </button>
                <p>
                  if you want to Review App as guest?
                  <span className="guest_text">Guest user </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

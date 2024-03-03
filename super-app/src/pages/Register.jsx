import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../assets/css/register.css";

const Register = () => {
  const [formValue, setFormValue] = useState({
    name: "",
    userName: "",
    email: "",
    mobile: "",
    checkbox: false,
  });
  const [error, setError] = useState({
    name: null,
    userName: null,
    email: null,
    mobile: null,
    checkbox: null,
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValue({
      ...formValue,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    var isValid = true;
    if (formValue.name.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        name: "Field is required",
      }));

      isValid = false;
    } else {
      setError((prev) => ({
        ...prev,
        name: null,
      }));
    }

    if (formValue.email.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        email: "Field is required",
      }));
      isValid = false;
    } else {
      setError((prev) => ({
        ...prev,
        email: null,
      }));
    }

    if (formValue.userName.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        userName: "Field is required",
      }));
      isValid = false;
    } else {
      setError((prev) => ({
        ...prev,
        userName: null,
      }));
    }

    if (formValue.mobile.trim().length === 0) {
      setError((prev) => ({
        ...prev,
        mobile: "Field is required",
      }));
      isValid = false;
    } else {
      setError((prev) => ({
        ...prev,
        mobile: null,
      }));
    }
    if (formValue.checkbox === false) {
      setError((prev) => ({
        ...prev,
        checkbox: "Check this box if you want to proceed",
      }));
      isValid = false;
    } else {
      setError((prev) => ({
        ...prev,
        checkbox: null,
      }));
    }

    if (isValid) {
      const data=JSON.stringify(formValue);
      localStorage.setItem("user",data);
      navigate("/movie")
    }
  };
  return (
    <>
      <div className="registerContainer">
        <div className="left">
          <img src="images/image13.png" />
          <p className="img-text">Discover new things on Superapp</p>
        </div>
        <div className="right">
          <div className="title imp-text single-day">Super app</div>
          <p className="dm-sans sub-title">Create your new account</p>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input dm-sans"
            value={formValue.name}
            onChange={handleChange}
            style={{ border: error.name && '1px solid red' }}
          />
          {error.name && <div className="error dm-sans register-error">{error.name}</div>}
          <input
            type="text"
            placeholder="UserName"
            name="userName"
            className="input dm-sans"
            value={formValue.userName}
            onChange={handleChange}
            style={{ border: error.userName && '1px solid red' }}
          />
          {error.userName && (
            <div className="error dm-sans register-error">{error.userName}</div>
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="input dm-sans"
            value={formValue.email}
            onChange={handleChange}
            style={{ border: error.email && '1px solid red' }}
          />
          {error.email && <div className="error dm-sans register-error">{error.email}</div>}
          <input
            type="Mobile"
            placeholder="Mobile"
            name="mobile"
            className="input dm-sans"
            value={formValue.mobile}
            onChange={handleChange}
            style={{ border: error.mobile && '1px solid red' }}
          />
          {error.mobile && <div className="error dm-sans register-error">{error.mobile}</div>}
          <div className="share-check dm-sans">
            <div className="checkbox">
              <input
                type="checkbox"
                name="checkbox"
                id="checkbox"
                onChange={handleChange}
                value={formValue.checkbox}
              />
              <label htmlFor="checkbox">
                Share my registration data with Superapp
              </label>
            </div>

            {error.checkbox && (
              <div className="error dm-sans">{error.checkbox}</div>
            )}
          </div>

          <button className="signup imp-background" onClick={handleSubmit}>
            SIGN UP
          </button>
          <div className="term-condition roboto-500">
            <p>
              By clicking on Sign up. you agree to Superapp{" "}
              <span className="imp-text">Terms and Conditions of Use</span>
            </p>
            <p>
              To learn more about how Superapp collects, uses, shares and
              protects your personal data please head Superapp{" "}
              <span className="imp-text">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

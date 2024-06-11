import React, { useState } from "react";
import useForm from "./useForm";
import validate from "./validate";
import "./MyForm.css";

const MyForm = () => {
  const { values, errors, handleChange, handleSubmit, submitted } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      mobile: "",
      address: "",
      state: "",
      country: "",
      zipcode: "",
      password: "",
      retypePassword: "",
    },
    validate
  );

  // const [submitted, setSubmitted] = useState(false);
  const [submittedValues, setSubmittedValues] = useState(null);

  const onSubmit = (e) => {
    handleSubmit(e);
    setSubmittedValues(values);

    // setSubmitted(true);
  };

  return (
    <div>
      {!submitted ? (
        <form onSubmit={onSubmit} className="form-container">
          <div>
            <label>First Name:</label>
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              required
            />
            {errors.firstName && <p className="error">{errors.firstName}</p>}
          </div>
          <div>
            <label>Last Name:</label>
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              required
            />
            {errors.lastName && <p className="error">{errors.lastName}</p>}
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div>
            <label>Mobile No:</label>
            <input
              type="tel"
              name="mobile"
              value={values.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>
          <div>
            <label>Address:</label>
            <input
              type="text"
              name="address"
              value={values.address}
              onChange={handleChange}
              required
            />
            {errors.address && <p className="error">{errors.address}</p>}
          </div>
          <div>
            <label>State:</label>
            <input
              type="text"
              name="state"
              value={values.state}
              onChange={handleChange}
              required
            />
            {errors.state && <p className="error">{errors.state}</p>}
          </div>
          <div>
            <label>Country:</label>
            <select
              name="country"
              value={values.country}
              onChange={handleChange}
              required
            >
              <option value="">Select Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              <option value="Australia">Australia</option>
              <option value="India">India</option>
              <option value="Germany">Germany</option>
              {/* Add more countries as needed */}
            </select>
            {errors.country && <p className="error">{errors.country}</p>}
          </div>
          <div>
            <label>Zip Code:</label>
            <input
              type="text"
              name="zipcode"
              value={values.zipcode}
              onChange={handleChange}
              required
            />
            {errors.zipcode && <p className="error">{errors.zipcode}</p>}
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={handleChange}
              required
            />
            {errors.password && <p className="error">{errors.password}</p>}
          </div>
          <div>
            <label>Retype Password:</label>
            <input
              type="password"
              name="retypePassword"
              value={values.retypePassword}
              onChange={handleChange}
              required
            />
            {errors.retypePassword && (
              <p className="error">{errors.retypePassword}</p>
            )}
          </div>
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div className="submitted-values">
          <h2>Submitted Values</h2>
          <pre>{JSON.stringify(submittedValues, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MyForm;

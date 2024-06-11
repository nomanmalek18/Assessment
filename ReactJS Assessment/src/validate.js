const validate = (values) => {
  const errors = {};
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  const mobileRegex = /^[0-9]{10}$/;
  const zipcodeRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;

  if (!values.firstName) {
    errors.firstName = "First Name is required";
  } else if (values.firstName.length < 4) {
    errors.firstName = "First Name must be at least 4 characters";
  }

  if (!values.lastName) {
    errors.lastName = "Last Name is required";
  } else if (values.lastName.length < 4) {
    errors.lastName = "Last Name must be at least 4 characters";
  }

  if (!values.email) {
    errors.email = "Email is required";
  } else if (!emailRegex.test(values.email)) {
    errors.email = "Email address is invalid";
  }

  if (!values.mobile) {
    errors.mobile = "Mobile number is required";
  } else if (!mobileRegex.test(values.mobile)) {
    errors.mobile = "Mobile number is invalid";
  }

  if (!values.address) {
    errors.address = "Address is required";
  }

  if (!values.state) {
    errors.state = "State is required";
  }

  if (!values.country) {
    errors.country = "Country is required";
  }

  if (!values.zipcode) {
    errors.zipcode = "Zip Code is required";
  } else if (!zipcodeRegex.test(values.zipcode)) {
    errors.zipcode = "Zip Code is invalid";
  }

  if (!values.password) {
    errors.password = "Password is required";
  }

  if (!values.retypePassword) {
    errors.retypePassword = "Retype Password is required";
  } else if (values.password !== values.retypePassword) {
    errors.retypePassword = "Passwords do not match";
  }

  return errors;
};

export default validate;

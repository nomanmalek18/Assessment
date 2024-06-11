import { useState } from "react";

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    // const [data,setData]=useState('')
 const [submitted, setSubmitted] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      console.log("Form Data Submitted:", values);
      setSubmitted(true)
        
    }
  };

  return {
    values,
    submitted,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;

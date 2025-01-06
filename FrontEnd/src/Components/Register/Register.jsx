import React from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';


const Register = () => {
      // Initial values for the form
        const initialValues = {
            username: '',
            password: '',
        };

        // Validation function (Optional)
        const validate = values => {
            const errors = {};
            if (!values.username) {
            errors.username = 'Username is required';
            }
            if (!values.password) {
            errors.password = 'Password is required';
            }
            return errors;
        };

        // On form submission
        const handleSubmit = (values) => {
            console.log('Form data', values);
        };

    return (
        <Formik
        initialValues={initialValues}
        validate={validate} // Optional validation function
        onSubmit={handleSubmit}
      >
        {() => (
          <Form>
            <div>
              <label htmlFor="username">User Name:</label>
              <Field
                type="text"
                id="username"
                name="username"
                placeholder="Enter username"
              />
              <ErrorMessage name="username" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="firstname">First Name:</label>
              <Field
                type="text"
                id="firstname"
                name="firstname"
                placeholder="Enter firstname"
              />
              <ErrorMessage name="firstname" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="lastname">Last Name:</label>
              <Field
                type="text"
                id="lastname"
                name="lastname"
                placeholder="Enter lastname"
              />
              <ErrorMessage name="lastname" component="div" className="error" />
            </div>
  
            <div>
              <label htmlFor="password">Password:</label>
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Enter password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
            <div>
              <label htmlFor="confirmpassword">Confirm Password:</label>
              <Field
                type="password"
                id="confirmpassword"
                name="confirmpassword"
                placeholder="Enter Confirm password"
              />
              <ErrorMessage name="password" component="div" className="error" />
            </div>
  
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    );
}

export default Register
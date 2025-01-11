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
          <div className="flex items-center content-center min-h-100 h-screen bg-[#4b4b4b]">
            <Form >
              <div className="flex flex-col items-center justify-center h-screen">
                <div>
                  <label htmlFor="username">User Name:</label>
                  <Field
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Enter username"
                    className="w-full max-w-md bg-[#222] rounded-xl shadow-md py-8 px-8"
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
              </div>
            </Form>
          </div>
        )}
      </Formik>
    );
}

export default Register
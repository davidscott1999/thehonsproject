import { useState } from 'react';

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../../contexts/AuthContext';
import ErrorPage from '../../Error/ErrorPage';

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handlePasswordReset = (values) => {
    const { email } = values;

    resetPassword(email)
      .then(() => {
        alert("Password reset link sent!");
        setHasError(false);
        console.log("Success");
      })
      .catch((error) => {
        console.log(error);
        setHasError(true);
        setErrorMessage(error.message);
      });
  };

  const validate = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
  });

  return (
    <div>
      {!hasError && (
        <section
          className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/loginBackground.jpg?alt=media&token=8ff32718-de6b-4b64-a224-ce33d84da979')",
            backgroundColor: "transparent",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
            <div className="lg:w-3/6 lg:pr-0 pr-0">
              <h1 className="font-large text-5xl text-white">
                Forgot password?
              </h1>
            </div>
            <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-200 p-8 flex flex-col lg:ml-2.5 w-full mt-10 lg:mt-0 rounded-md">
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={validate}
                // Changed this to use the handleSubmit function above
                onSubmit={(values, { isSubmitting, setSubmitting }) => {
                  handlePasswordReset(values);
                }}
              >
                {({ isSubmitting, isValid }) => (
                  <Form>
                    <label htmlFor="email">Email:</label>
                    <Field
                      id="Email"
                      name="email"
                      type="email"
                      className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                    />
                    <div className="text-sm font-normal text-red-500 mt-1">
                      <ErrorMessage name="email" />
                    </div>
                    <button
                      className={`text-white bg-gray-600 rounded-md border-0 mt-2 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full ${
                        isValid && "bg-green-800"
                      }`}
                      type="submit"
                      disabled={isSubmitting}
                    >
                      Reset Password
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      )}
      {hasError && <ErrorPage error={errorMessage}></ErrorPage>}
    </div>
  );
};

export { ResetPassword };

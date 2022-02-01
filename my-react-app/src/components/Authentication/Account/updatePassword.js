import { useState } from 'react';

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../contexts/AuthContext';
import ErrorPage from '../Error/ErrorPage';

const UpdatePassword = () => {
  const { updatePassword } = useAuth();
  const history = useHistory();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handlePasswordUpdate = (values) => {
    const { password } = values;

    updatePassword(password)
      .then(() => {
        history.push("/account");
        setHasError(false);
        console.log("Success");
      })
      .catch((error) => {
        setHasError(true);
        setErrorMessage(error.message);
        console.log(error);
      });
  };

  const validate = Yup.object().shape({
    password: Yup.string()
      .min(10, "Must be 10 characters or more")
      .required("Password Required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must match")
      .required("Confirm password is required"),
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
            <div className="lg:w-3/6 lg:pr-0 pr-0 mt-10">
              <h1 className="font-large text-5xl text-white">Update Account</h1>
            </div>
            <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-200 p-8 flex flex-col lg:ml-2.5 w-full mt-10 lg:mt-0 rounded-md">
              <Formik
                initialValues={{
                  email: "",
                }}
                validationSchema={validate}
                // Changed this to use the handleSubmit function above
                onSubmit={(values, { setSubmitting }) => {
                  handlePasswordUpdate(values);
                }}
              >
                {({ isSubmitting, isValid }) => (
                  <Form>
                    <div className="text-sm font-normal text-red-500 mt-1">
                      <ErrorMessage name="name" />
                    </div>
                    <label htmlFor="password">Password:</label>
                    <Field
                      id="Password"
                      name="password"
                      type="password"
                      className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                    />
                    <div className="text-sm font-normal text-red-500 mt-1">
                      <ErrorMessage name="password" />
                    </div>

                    <label htmlFor="password">Confirm Password:</label>
                    <Field
                      id="ConfirmPassword"
                      name="confirmPassword"
                      type="password"
                      className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                    />
                    <div className="text-sm font-normal text-red-500 mt-1">
                      <ErrorMessage name="password" />
                    </div>
                    <button
                      className={`text-white bg-gray-600 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full ${
                        isValid && "bg-green-800"
                      }`}
                      type="submit"
                    >
                      Update
                    </button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </section>
      )}
      {hasError && <ErrorPage error={errorMessage} />}
    </div>
  );
};

export { UpdatePassword };

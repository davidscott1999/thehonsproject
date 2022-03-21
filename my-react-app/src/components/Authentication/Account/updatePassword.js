import { useState } from 'react';

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../../contexts/AuthContext';

const UpdatePassword = () => {
  const { passwordUpdate } = useAuth();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = (values) => {
    const { newPassword } = values;

    setLoading(true);
    passwordUpdate(newPassword)
      .then(() => {
        history.push("/account");
        setHasError(false);
        alert("Password change successful");
        console.log("Success");
      })
      .catch((error) => {
        setHasError(true);
        alert("You have to log in again, as your session has expired");
        setErrorMessage(error.message);
        console.log(error);
      });
    setLoading(false);
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
      <section
        className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/loginBackground.jpg?alt=media&token=8ff32718-de6b-4b64-a224-ce33d84da979')",
          backgroundColor: "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
          <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-200 p-8 flex flex-col lg:ml-2.5 w-full mt-10 lg:mt-0 rounded-md">
            <Formik
              validationSchema={validate}
              onSubmit={(values, action) => {
                onSubmit(values, action);
              }}
              initialValues={{
                newPassword: "",
                confirmPassword: "",
              }}
            >
              <Form method="POST" name="completedMunros">
                <div className="mb-2">
                  <label className="text-bold text-medium" htmlFor="name">
                    Password:
                  </label>
                  <Field
                    id="Password"
                    name="password"
                    type="password"
                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                  ></Field>
                  <div>
                    <ErrorMessage name="name" />
                  </div>
                </div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <Field
                  id="ConfirmPassword"
                  name="confirmPassword"
                  type="password"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div className="text-sm font-normal text-red-500 mt-1">
                  <ErrorMessage name="confirmPassword" />
                </div>
                <button
                  className="text-white bg-gray-600 rounded-md border-0 mt-2 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full"
                  type="submit"
                >
                  Save
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export { UpdatePassword };

import { useState } from 'react';

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import {
  Link,
  useHistory,
} from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../contexts/AuthContext';
import ErrorPage from '../Error/ErrorPage';

const Signup = () => {
  const { signup } = useAuth();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (values) => {
    const { email, password } = values;

    setLoading(true);
    signup(email, password)
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
    setLoading(false);
  };

  const validateLogin = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
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
            <div className="lg:w-3/6 lg:pr-0 pr-0">
              <h1 className="font-large text-5xl text-white">
                Sign in to your Account
              </h1>
            </div>
            <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-200 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  confirmPassword: "",
                }}
                validationSchema={validateLogin}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmit(values);
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
                    <div role="group" aria-labelledby="checkbox-group">
                      <label>
                        <Field type="checkbox" name="checked" required />I agree
                        to the Munro Baggers
                        <Link to="/disclaimer">
                          {" "}
                          Disclaimer policy
                        </Link> and{" "}
                        <a href="https://www.privacypolicygenerator.info/live.php?token=TdOZDKpjDPMA7hA20HJ95cGUx2x5hgmE">
                          {" "}
                          Privacy policy
                        </a>
                      </label>
                    </div>
                    <button
                      className={`text-white bg-gray-600 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full ${
                        isValid && "bg-green-800"
                      }`}
                      type="submit"
                      disabled={loading}
                    >
                      Sign up
                    </button>
                  </Form>
                )}
              </Formik>
              <div className="text-center mt-3">
                <Link to="/login">Already got an account?</Link>
              </div>
            </div>
          </div>
        </section>
      )}
      {hasError && <ErrorPage path={`/error`}></ErrorPage>}
    </div>
  );
};

export { Signup };

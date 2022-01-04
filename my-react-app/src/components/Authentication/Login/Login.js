import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const validateLogin = Yup.object().shape({
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(10, "Must be 10 characters or more")
    .required("Password Required"),
});

const Login = () => {
  return (
    <section
      className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(media/loginBackground.jpg)",
        backgroundColor: "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
        <div className="lg:w-3/6 lg:pr-0 pr-0">
          <h1 className="font-large text-5xl text-white">
            Login to your Account
          </h1>
        </div>
        <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-200 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={validateLogin}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
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
                <button
                  disabled={!isValid}
                  className="text-white text-white bg-gray-600 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full"
                  type="submit"
                >
                  Login
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center mt-3">
            <Link to="/forgotPassword">Forgot Password?</Link>
          </div>
          <div className="text-center mt-3">
            <Link to="/signup">Not registered for an account?</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Login };

import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

const validate = Yup.object().shape({
  firstName: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid Email").required("Email is required"),
  password: Yup.string()
    .min(10, "Must be 10 characters or more")
    .required("Password Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Password must match")
    .required("Confirm password is required"),
});

const Register = () => {
  return (
    <section
      className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: "url(media/loginBackground.jpg)",
        backgroundColor: "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
        <div className="lg:w-3/6 lg:pr-0 pr-0 mt-10">
          <h1 className="font-large text-5xl text-white">
            Register an account
          </h1>
          <p className="leading-relaxed text-white text-4x1 font-medium mb-4">
            Welcome to the Munro Baggers App. We look forward to sharing our
            inspiration for the great outdoors and helping you along the way
            with planning and logging your next Munro.
          </p>
        </div>
        <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-200 p-8 flex flex-col lg:ml-2.5 w-full mt-10 lg:mt-0 rounded-md">
          <Formik
            initialValues={{
              firstName: "",
              surname: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={validate}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
            }}
          >
            {({ isSubmitting, isValid }) => (
              <Form>
                <label htmlFor="firstName">First Name:</label>
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div className="text-sm font-normal text-red-500 mt-1">
                  <ErrorMessage name="name" />
                </div>

                <label htmlFor="surname">Surname:</label>
                <Field
                  id="Surname"
                  name="surname"
                  type="text"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div className="text-sm font-normal text-red-500 mt-1">
                  <ErrorMessage name="name" />
                </div>
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

                <label htmlFor="password">Confirm Password:</label>
                <Field
                  id="confirmPassword"
                  name="ConfirmPassword"
                  type="password"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div className="text-sm font-normal text-red-500 mt-1">
                  <ErrorMessage name="password" />
                </div>
                <button
                  className="text-white bg-gray-600 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full"
                  type="submit"
                  disabled={!isValid}
                >
                  Register
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center mt-3">
            <Link href="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Register };

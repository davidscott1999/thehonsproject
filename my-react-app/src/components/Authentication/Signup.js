import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../contexts/AuthContext';

const Signup = () => {
  const { signup } = useAuth();

  // Added this to handle the submit of the form
  const handleSubmit = (values) => {
    // If you submit your form and check the console you will see all of the form properties you have access to
    console.log(values);

    // We can destructure the ones we need from the values object
    const { email, password } = values;

    // These can then be passed to your signup function
    signup(email, password);

    // // signup is a promise so you could do something like this to handle any errors ...
    // signup(email, password)
    // .then(() => {
    //   // update state variable, maybe you want to display a toast message to say signup successful or something like that
    //   console.log('Success');
    // })
    // .catch((error) => {
    //   // maybe you want to redirect to an error page or display a toast message to say there has been a problem
    //   console.log(error);
    // });
  };

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
            // Changed this to use the handleSubmit function above
            onSubmit={(values, { setSubmitting }) => {
              handleSubmit(values);
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
                {/* Fixed an issue here with the id and name of confirmPassword which was stopping values being submitted */}
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
                  Register
                </button>
              </Form>
            )}
          </Formik>
          <div className="text-center mt-3">
            <Link to="/login">Already have an account?</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Signup };

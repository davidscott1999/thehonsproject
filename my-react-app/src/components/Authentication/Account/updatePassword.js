import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import * as Yup from 'yup';

import { useAuth } from '../../../contexts/AuthContext';

const UpdatePassword = () => {
  const { UpdatePassword } = useAuth();

  // Added this to handle the submit of the form
  const handlePasswordUpdate = (values) => {
    // If you submit your form and check the console you will see all of the form properties you have access to
    console.log(values);

    // We can destructure the ones we need from the values object
    const { email } = values;

    // These can then be passed to your signup function

    // // signup is a promise so you could do something like this to handle any errors ...
    UpdatePassword(email)
      .then(() => {
        //   // update state variable, maybe you want to display a toast message to say signup successful or something like that
        console.log("Success");
      })
      .catch((error) => {
        //   // maybe you want to redirect to an error page or display a toast message to say there has been a problem
        console.log(error);
      });
  };

  const validate = Yup.object().shape({
    email: Yup.string().email("Invalid Email").required("Email is required"),
  });

  return (
    <>
      <section
        className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url(media/loginBackground.jpg)",
          backgroundColor: "transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
          <div className="lg:w-3/6 lg:pr-0 pr-0">
            <h1 className="font-large text-5xl text-white">Change Password</h1>
          </div>
          <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-200 p-8 flex flex-col lg:ml-2.5 w-full mt-10 lg:mt-0 rounded-md">
            <Formik
              initialValues={{
                password: "",
              }}
              validationSchema={validate}
              // Changed this to use the handleSubmit function above
              onSubmit={(values, { setSubmitting }) => {
                handlePasswordUpdate(values);
              }}
            >
              {({ isSubmitting, isValid }) => (
                <Form>
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
                    className={`text-white bg-gray-600 rounded-md border-0 mt-2 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full ${
                      isValid && "bg-green-800"
                    }`}
                    type="submit"
                  >
                    Reset Password
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </>
  );
};

export { UpdatePassword };
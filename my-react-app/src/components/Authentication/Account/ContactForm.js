import { useState } from 'react';

import {
  addDoc,
  collection,
} from 'firebase/firestore';
import {
  ErrorMessage,
  Field,
  Form,
  Formik,
} from 'formik';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import { useAuth } from '../../../contexts/AuthContext';
import { db } from '../../../firebase';

const ContactForm = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();
  const { currentUser } = useAuth();
  const { uid } = currentUser;
  const [updatingCollection, setUpdatingCollection] = useState(false);

  const contactCollection = collection(db, "contact-us");

  const onSubmit = async (values, actions) => {
    // const {resetForm} = actions;
    if (updatingCollection) {
      return;
    }

    setUpdatingCollection(true);

    const contactDto = { uid, ...values };

    await addDoc(contactCollection, contactDto)
      .then(() => {
        setUpdatingCollection(false);
      })

      .then(() => {
        history.push("/");
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
    name: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
    details: Yup.string().required("Required"),
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
              onSubmit={(values, action) => {
                onSubmit(values, action);
                alert(
                  "Thank you for contacting Munro Baggers. We will be in touch."
                );
              }}
              initialValues={{
                contactReason: "",
                name: "",
                email: "",
                date: "",
                details: "",
              }}
              validationSchema={validate}
            >
              <Form method="POST" name="completedMunros">
                <div className="mb-2">
                  <label
                    className="text-bold text-medium"
                    htmlFor="contactReason"
                  >
                    Reason for Contact :
                  </label>
                  <Field
                    id="contactReason"
                    placeholder="e.g Error, Question, Feedback"
                    name="contactReason"
                    required
                    type="text"
                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                  ></Field>
                  <div>
                    <ErrorMessage name="contactReason" />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="text-bold text-medium" htmlFor="name">
                    Name:
                  </label>
                  <Field
                    id="Name"
                    name="name"
                    required
                    type="text"
                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                  ></Field>
                  <div>
                    <ErrorMessage name="name" />
                  </div>
                </div>
                <div className="mb-2">
                  <label className="text-bold text-medium" htmlFor="email">
                    Email
                  </label>
                  <Field
                    id="email"
                    required
                    name="email"
                    type="email"
                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                  ></Field>
                  <div>
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <label htmlFor="date">Date of contact:</label>
                <Field
                  id="Date"
                  required
                  name="date"
                  type="date"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div>
                  <ErrorMessage name="date" />
                </div>
                <label htmlFor="details">Additional Details:</label>
                <Field
                  id="Details"
                  name="details"
                  type="text"
                  placeholder="e.g Error when logging Munro"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div>
                  <ErrorMessage name="details" />
                </div>
                <button
                  className="text-white bg-gray-600 rounded-md border-0 mt-2 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full"
                  type="submit"
                  required
                >
                  Submit
                </button>
              </Form>
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export { ContactForm };

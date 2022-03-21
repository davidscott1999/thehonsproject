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

import { useAuth } from '../../contexts/AuthContext';
import { db } from '../../firebase';
import munroData from '../Data/munroData';

const AddLogs = ({
  match: {
    params: { munroId },
  },
}) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const history = useHistory();
  const { currentUser } = useAuth();
  const { uid } = currentUser;
  const [updatingCollection, setUpdatingCollection] = useState(false);
  const munro = munroData.find((munro) => munro.smcid === munroId);

  const completedMunrosCollection = collection(db, "completedMunros");

  const onSubmit = async (values, actions) => {
    // const {resetForm} = actions;
    if (updatingCollection) {
      return;
    }

    setUpdatingCollection(true);

    const completedMunroDto = { uid, ...values };

    await addDoc(completedMunrosCollection, completedMunroDto)
      .then(() => {
        setUpdatingCollection(false);
        // redirect or show a notification that data has been added
        // clear the form values
        // resetForm();
      })

      .then(() => {
        history.push("/view-logs");
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
    date: Yup.string().required("Required"),
    comment: Yup.string().required("Required"),
    file: Yup.mixed().notRequired(),
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
                alert("Your log has been saved to your account");
              }}
              initialValues={{
                name: munro.name,
                smcid: munro.smcid,
                region: munro.region,
                date: "",
                comment: "",
                file: undefined,
              }}
              validationSchema={validate}
            >
              <Form method="POST" name="completedMunros">
                <div className="mb-2">
                  <label
                    className="text-bold text-medium"
                    htmlFor="name"
                    type="text"
                    name="name"
                  >
                    Name:
                  </label>
                  <Field
                    id="Name"
                    name="name"
                    type="text"
                    value={munro.name}
                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                  ></Field>
                  <div>
                    <ErrorMessage name="name" />
                  </div>
                </div>
                <label className="text-bold text-medium" htmlFor="name">
                  smcID:
                </label>
                <Field
                  id="smcID"
                  name="smcid"
                  type="text"
                  value={munro.smcid}
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div>
                  <ErrorMessage name="smcid" />
                </div>
                <label className="text-bold text-medium" htmlFor="name">
                  Region:
                </label>
                <Field
                  id="region"
                  name="region"
                  type="text"
                  value={munro.region}
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div>
                  <ErrorMessage name="smcid" />
                </div>
                <label htmlFor="date">Date:</label>
                <Field
                  id="Date"
                  name="date"
                  type="date"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div>
                  <ErrorMessage name="date" />
                </div>
                <label htmlFor="comment">Comment:</label>
                <Field
                  id="Comment"
                  name="comment"
                  type="text"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div>
                  <ErrorMessage name="comment" />
                </div>
                <label htmlFor="file">Photograph:</label>
                <Field
                  id="File"
                  name="file"
                  type="file"
                  className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                />
                <div>
                  <ErrorMessage name="file" />
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

export { AddLogs };

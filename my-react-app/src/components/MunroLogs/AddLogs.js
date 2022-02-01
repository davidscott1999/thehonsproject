import { useState } from 'react';

import {
  addDoc,
  collection,
} from 'firebase/firestore';
import {
  Field,
  Form,
  Formik,
} from 'formik';
import { useHistory } from 'react-router-dom';

import { db } from '../../firebase';

const AddLogs = () => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const history = useHistory();

  const handleAddingLog = () => {
    // // signup is a promise so you could do something like this to handle any errors ...
    addDoc(collection(db, "logs"), {
      name: "Ben Hope",
      date: "31/01/22",
      comment: "Cold conditions, completed in 3hrs",
      progress: true,
    })
      .then(() => {
        //   // update state variable, maybe you want to display a toast message to say signup successful or something like that
        history.push("/logs");
        setHasError(false);
        console.log("Success");
      })
      .catch((error) => {
        // maybe you want to redirect to an error page or display a toast message to say there has been a problem
        setHasError(true);
        setErrorMessage(error.message);
        console.log(error);
      });
  };

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
            <Formik>
              {({ isSubmitting, isValid }) => (
                <Form>
                  <div className="mb-2">
                    <label className="text-bold text-medium" htmlFor="name">
                      Ben Nevis
                    </label>
                  </div>
                  <label htmlFor="date">Date:</label>
                  <Field
                    id="Date"
                    name="date"
                    type="date"
                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                  />
                  <label htmlFor="password">Comment:</label>
                  <Field
                    id="Comment"
                    name="comment"
                    type="text"
                    className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                  />
                  <button
                    className={`text-white bg-gray-600 rounded-md border-0 mt-2 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full ${
                      isValid && "bg-green-800"
                    }`}
                    type="submit"
                    disabled={isSubmitting}
                    onClick={handleAddingLog}
                  >
                    Save
                  </button>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </section>
    </div>
  );
};

export { AddLogs };

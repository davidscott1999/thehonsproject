import React, { useState } from 'react';

import {
  Link,
  useHistory,
} from 'react-router-dom';

import { useAuth } from '../../../contexts/AuthContext';

const Account = () => {
  const history = useHistory();
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const { currentUser, logout } = useAuth();

  // Added this to handle the submit of the form
  const handleLogout = () => {
    logout()
      .then(() => {
        history.push("/login");
        setHasError(false);
        console.log("Success");
      })
      .catch((error) => {
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
          <div className="lg:w-3/6 lg:pr-0 pr-0 mt-10">
            <h1 className="font-large text-5xl text-white">
              Update your account
            </h1>
          </div>
          <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-200 p-8 flex flex-col lg:ml-2.5 w-full mt-10 lg:mt-0 rounded-md">
            <label htmlFor="firstName">Email : {currentUser.email}</label>
            <div>
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white text-center mt-4 font-bold py-2 px-4 rounded-full flex flex-col"
                to="/update-email"
              >
                Update Email
              </Link>
            </div>
            <div>
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white text-center mt-4 font-bold py-2 px-4 rounded-full flex flex-col"
                to="/update-password"
              >
                Update Password
              </Link>
            </div>
            <div>
              <Link
                className="text-white text-medium text-center font-bold py-2 px-4 flex flex-col mt-4"
                onClick={handleLogout}
              >
                Sign out
              </Link>
            </div>
          </div>
          <div className="text-center mt-3"></div>
        </div>
      </section>
    </div>
  );
};

export { Account };

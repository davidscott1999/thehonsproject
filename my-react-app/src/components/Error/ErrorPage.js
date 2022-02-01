import React from 'react';

import { Link } from 'react-router-dom';

const ErrorPage = ({ error }) => {
  return (
    <>
      <section
        className="w-full text-gray-900 py-36 bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://firebasestorage.googleapis.com/v0/b/auth-development-980d7.appspot.com/o/errorPage.jpg?alt=media&token=9dcb9af2-63a0-4971-a367-4648f97bc839')",
          backgroundColor: "transparent",
        }}
      >
        <div>
          <div>
            <h1 className="font-large text-5xl text-white">
              Something went wrong...
            </h1>
            <div>
              <p className="leading-relaxed text-white text-4x1 font-medium mb-4 m-3">
                Please try again, or please contact us from the main dashboard.
              </p>
            </div>
          </div>
          <div className="mt-5 ml-3">
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white text-center font-bold py-2 px-4 rounded-full"
              type="navigation"
              to="/"
            >
              Go Back
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ErrorPage;

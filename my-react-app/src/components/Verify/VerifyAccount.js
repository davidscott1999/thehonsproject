import React from 'react';

const VerifyAccount = () => {
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
        <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-blue-800 p-8 flex flex-col lg:ml-2.5 mt-10 w-full lg:mt-0 rounded-md">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 flex items-center justify-center">
            <div className="lg:w-3/6 lg:pr-0 pr-0 mt-10">
              <h1 className="font-large text-5xl text-white">
                Verify your account.
              </h1>
              <h2 className="leading-relaxed text-white text-4x1 font-xl mt-2">
                Thank you for creating an account. Please check your emails.
              </h2>
            </div>
          </div>
          <button
            className="text-white bg-gray-800 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg w-full"
            type="navigation"
            onClick={() => (window.location.href = "/login")}
          >
            Go to login
          </button>
        </div>
      </section>
    </>
  );
};

export default VerifyAccount;

import React, {
  useRef,
  useState,
} from 'react';

import { useHistory } from 'react-router-dom';

import { useAuth } from '../../contexts/AuthContext';

function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const signup = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  //prevent form refreshing
  async function handleSubmit(e) {
    e.preventDefault();

    //error handling to check if passwords match
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }

    //error handling for creating an account
    try {
      setError("");
      setLoading(true);
      await signup(emailRef.current.value, passwordRef.current.value);
      history.push();
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);
  }

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
            <h1 className="font-large text-5xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="leading-relaxed text-white mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-200 p-8 flex flex-col lg:ml-2.5 w-full mt-10 lg:mt-0 rounded-md">
            <div className="relative mb-4">
              <label
                for="email"
                className="leading-7 text-sm text-gray-600"
              ></label>
              Email:
              <input
                className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                type="email"
                ref={emailRef}
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                for="password"
                className="leading-7 text-sm text-gray-600"
              ></label>
              Password:
              <input
                className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                type="password"
                ref={passwordRef}
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                for="passwordConfirm"
                className="leading-7 text-sm text-gray-600"
              ></label>
              Confirm Password:
              <input
                className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out"
                type="passwordConfirm"
                ref={passwordConfirmRef}
                required
              />
            </div>
            <button
              disabled={loading}
              className="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg mr-2"
              type="signUp"
              onClick={handleSubmit}
            >
              Login
            </button>
            {error && <alert variant="danger">{error}</alert>}
            <a className="text-center mt-2" href="/login">
              Already have an account?
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export { Signup };

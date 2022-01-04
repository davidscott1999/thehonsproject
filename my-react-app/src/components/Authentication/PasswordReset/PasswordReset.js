import React, {
  useRef,
  useState,
} from 'react';

import { useAuth } from '../../../contexts/AuthContext';

function PasswordReset() {
  const emailRef = useRef();
  const resetPassword = useAuth();
  const { error, setError } = useState("");
  const { message, setMessage } = useState("");
  const { loading, setLoading } = useState(false);

  //prevent form refreshing
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(emailRef.current.value);
      setMessage("Please check your emails");
    } catch {
      setError("Failed to reset your password");
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
            <h1 className="font-large text-5xl text-white">Forgot password?</h1>
            <p className="leading-relaxed text-white mb-2">
              Enter your email, and we will send you an email which you can
              reset your password from.
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
                className="w-full bg-white rounded-md border border-gray-300 focus:border-indigo-600 focus:ring-2 focus:ring-indigo-200 text-sm outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-150 ease-in-out "
                type="email"
                ref={emailRef}
                required
              />
            </div>
            <button
              disabled={loading}
              className="text-white bg-indigo-500 rounded-md border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 text-lg ml-2"
              type="submit"
              onSubmit={handleSubmit}
            >
              Reset Password
            </button>
            {error && <alert variant="danger">{error}</alert>}
          </div>
        </div>
      </section>
    </>
  );
}

export { PasswordReset };

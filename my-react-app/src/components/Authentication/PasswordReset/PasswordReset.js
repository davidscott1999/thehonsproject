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
            <h1 className="font-large text-5xl text-white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </h1>
            <p className="leading-relaxed text-white mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-50 p-8 flex flex-col lg:ml-auto w-full mt-10 lg:mt-0 rounded-md">
            <div className="lg:w-3/6 xl:w-2/5 md:w-full bg-gray-200 p-8 flex flex-col lg:ml-2.5 w-full mt-10 lg:mt-0 rounded-md">
              <div className="relative mb-4">
                <label
                  for="email"
                  className="leading-7 text-sm text-gray-600"
                ></label>
                Email:
                <input type="email" ref={emailRef} required />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { PasswordReset };
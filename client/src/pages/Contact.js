import React from "react";
// import { Textarea, Button } from 'react-daisyui';

// add error notification if invalid email address entered
// Change to Card component
// handleFormSubmit

const Contact = () => {
  return (
    <div className="bg-base-100 px-6 flex flex-col pt-7 pb-36 justify-center items-center text-secondary-content">
      <div className="grid grid-cols-2">
          <div className="bg-base-200 px-5">
            <h1 className="text-xl font-bold">Let's Talk About Everything!</h1>
            <p>Hate forms? Send us an <span className="underline">email</span> instead.</p>
          </div>
          <form className="bg-base-200 py-5 px-5">
            <h2 className="text-center text-xl font-bold py-3">Get in Touch</h2>
            
            <div>
              <span className="uppercase text-sm text-neutral-content font-bold">
                Full Name
              </span>
              <input
                className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Full Name"
              />
            </div>
            <div className="mt-2">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Email
              </span>
              <input
                className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Email"
              />
            </div>
            <div className="mt-2">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Subject
              </span>
              <input
                className="w-full text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Subject"
              />
            </div>
            <div className="mt-2">
              <span className="uppercase text-sm text-gray-600 font-bold">
                Message
              </span>
              <textarea className="w-full h-32 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mt-3">
              <button className="uppercase text-sm font-bold tracking-wide bg-indigo-500 text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline">
                Send
              </button>
            </div>
          </form>
      </div>
    </div>
  );
};

export default Contact;

import React from "react";
import Button from "../components/MainButton/Button";
// import { Textarea, Button } from 'react-daisyui';

// add error notification if invalid email address entered
// Change to Card component
// handleFormSubmit

const Contact = () => {
  return (
    <div className="bg-base-100 px-6 flex flex-col pt-7 pb-36 justify-center items-center text-secondary-content">
      <div className="grid grid-cols-2">
        <div className="bg-base-200 px-16">
          <h1 className="text-xl font-bold pt-6">
            Let's Talk About Everything!
          </h1>
          <p>
            Hate forms? Send us an{" "}
            <span className="underline">
              {" "}
              <a href="https://mail.google.com/mail/u/2/?ogbl#inbox?compose=CllgCJlDTWfQTJNfsdzbFRQKFPjwqJRbmPXMlNqCQBBwFzJkMtdJBZgMWxMdJHxPMXJLhGCnmRL"> email</a>
              
            </span>{" "}
            instead.
          </p>
          <figure>
            <img
              src="https://media.istockphoto.com/vectors/open-book-with-air-balloon-and-clouds-vector-id1090884690?k=20&m=1090884690&s=612x612&w=0&h=HgP4IZ6P-DDC8lP1L7sC0hXvt02Gn4gVwq-TK76l9Qc="
              alt="hot air balloons"
              width="400"
              height="620"
              className="pt-4"
            />
          </figure>
        </div>
        <form className="bg-base-200 py-8 px-16">
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

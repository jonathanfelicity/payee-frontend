import React from "react";

const Signup: React.FC = () => {

  return (
    <div className="flex h-screen">
      {/* Background Image */}
      <div
        className="hidden lg:block bg-cover w-1/2"
        style={{ backgroundImage: "url('https://via.placeholder.com/700x500')" }}
      ></div>

      {/* Login Form */}
      <div className="w-full lg:w-1/2">
        <form className="p-8">
          <div className="mb-4 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 ">Signup</h2>
            <p text-gray-200>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>

          <div className="mb-4 flex justify-between">
            <div className="w-1/2 mr-2">
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Enter your first name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Enter your last name"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="middleName"
              name="middleName"
              placeholder="Enter your middle name"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4 flex justify-between">
            <div className="w-1/2 mr-2">
              <input
                type="text"
                id="phoneNuber"
                name="phoneNuber"
                placeholder="Enter your phone number"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
            <div className="w-1/2 ml-2">
              <input
                type="text"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          <div className="mb-4">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="text"
              id="bvn"
              name="bvn"
              placeholder="Enter your BVN"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Signup
          </button>
        </form>
      </div>
    </div>

  );
};

export default Signup;

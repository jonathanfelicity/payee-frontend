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
      <div className="w-full lg:w-1/2 bg-white">
        <form className="w-4/5 lg:w-3/5 p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-800">Login</h2>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

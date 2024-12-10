import React, { useState } from "react";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuthMode = () => setIsLogin(!isLogin);

  return (
    <div className="dark min-h-screen bg-black flex items-center justify-center">
      <div className="text-white shadow-md rounded-lg p-6 w-full max-w-md border border-white">
        <h2 className="text-2xl font-semibold text-center mb-6">
          {isLogin ? "Login" : "Register"}
        </h2>
        <form>
          {!isLogin && (
            <div className="mb-4">
              <label htmlFor="username" className="block text-gray-300 mb-1">
                Username
              </label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-400"
                placeholder="Enter your username"
              />
            </div>
          )}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
                id="email"
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-400"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-300 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring focus:ring-red-400"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition"
          >
            {isLogin ? "Login" : "Register"}
          </button>
        </form>
        <p className="mt-4 text-center text-gray-400">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            onClick={toggleAuthMode}
            className="text-red-400 hover:underline"
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;

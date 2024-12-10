import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/contextApi";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(Context)

  const handleSignIn = (e) => {
    e.preventDefault();
    if (email === "test@example.com" && password === "1234") {
    const data = {
        email:email,
        password:password
    }
    login(data)
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <div className="w-full max-w-md bg-[#1e1e1e] rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-center">Sign In</h2>
        <form onSubmit={handleSignIn} className="mt-6">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 bg-black text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-bold mb-2"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 bg-black text-white border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="text-right">
            <a
              href="#"
              className="text-sm text-blue-500 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg mt-4 hover:bg-blue-600 transition"
          >
            Sign In
          </button>
          
        </form>
        <div className="text-center mt-4">
          <p className="text-sm text-gray-400">
            Don't have an account?{" "}
            <a
              href="/create-channel"
              className="text-blue-500 hover:underline"
            >
              Create Channel
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

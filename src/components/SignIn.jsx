import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For navigation
import { Context } from "../context/contextApi";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // For loading state
  const navigate = useNavigate();
const {login,setUser} = useContext(Context)
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true); // Start loading

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/users/login", 
        formData,
        {
          withCredentials: true, // To send cookies with the request
        }
      );

      // Handle successful login response
      setMessage(response.data.message);
      login(response.data.data.user)
      if(response.data.success){
        navigate('/')
      }

      // Redirect to the dashboard or another page after login
      
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-white">Login</h2>
        {message && <div className="text-green-500 mb-4">{message}</div>}
        {error && <div className="text-red-500 mb-4">{error}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border-gray-700 bg-gray-600 text-white rounded-md shadow-sm p-2"
              required
            />
          </div>
          
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-white">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border-gray-700 bg-gray-600 text-white rounded-md shadow-sm p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;

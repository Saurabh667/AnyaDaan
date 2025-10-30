import React, { useState} from "react";
import { Link, useNavigate } from 'react-router-dom'


const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://127.0.0.1:8000/api/login/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage("✅ Login successful!");
        navigate('/')
        console.log("Login data:", data);
      } else {
        const errData = await response.json();
        setMessage(`❌ Error: ${errData.detail || "Invalid credentials"}`);
      }
    } catch (error) {
      console.error("Network error:", error);
      setMessage("⚠️ Network error. Please try again.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-xl p-8 w-full max-w-sm"
      >
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Login
        </h2>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-600 mb-1" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-indigo-300"
            placeholder="Enter your password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>

        {message && (
          <p className="text-center text-sm text-gray-600 mt-4">{message}</p>
        )}
      </form>
    </div>
  );
};

export default Login;

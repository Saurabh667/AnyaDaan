import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom'


export default function Signup() {
  const [formData, setFormData] = useState({
    companyName: "",
    role: "",
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup Data:", formData);
    
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/signup/", formData);
      console.log("Signup successful:", response.data);
      alert("Signup successful!");
      const res = await fetch("http://127.0.0.1:8000/api/send-email/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "jpyadav22217@gmail.com" }),
        
      });
      console.log('email send succesfully')
      navigate('/login')
    } catch (error) {
      console.error("Error during signup:", error.response?.data || error.message);
      alert("Signup failed! Check console for details.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md border border-green-100 mt-[65px]">
        <h1 className="text-3xl font-bold text-green-700 text-center mb-6">
          Anyadaan Signup
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company / Organization Name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
              placeholder="e.g., GreenBite Foods"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          {/* Role Selection */}
          <div>
            <p className="block text-sm font-medium text-gray-700 mb-1">
              Are you a donor or receiver?
            </p>
            <div className="flex items-center space-x-6">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="role"
                  value="donor"
                  checked={formData.role === "donor"}
                  onChange={(e) =>
                    setFormData({ ...formData, role: "donor" })
                  }
                  className="w-4 h-4 text-green-600"
                />
                <span className="text-gray-700">Donor</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  name="role"
                  value="receiver"
                  checked={formData.role === "receiver"}
                  onChange={(e) =>
                    setFormData({ ...formData, role: "receiver" })
                  }
                  className="w-4 h-4 text-green-600"
                />
                <span className="text-gray-700">Receiver</span>
              </label>
            </div>
          </div>

          {/* Name Fields */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                name="first_name"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="Shyam"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                name="last_name"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Lal"
                className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+91 9876543210"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
          >
            Create Account
          </button>

          <p className="text-sm text-center text-gray-600 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-green-700 font-medium hover:underline">
              Log in
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
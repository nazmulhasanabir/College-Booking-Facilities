"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

export default function ModernSignupForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    console.log("Submitted:", formData);
    alert("Account created!");
  };

  const isFormInvalid =
    !formData.fullName ||
    !formData.email ||
    !formData.password ||
    formData.password !== formData.confirmPassword ||
    !formData.agree;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-purple-100 px-4">
      <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Create Account
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <button  className="flex items-center gap-2 border px-5 py-2 rounded-md text-sm font-medium hover:shadow-md">
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex items-center gap-2 border px-5 py-2 rounded-md text-sm font-medium hover:shadow-md text-blue-600">
            <FaFacebook size={20} /> Facebook
          </button>
        </div>

        <div className="text-center text-gray-400 text-sm mb-4">or continue with email</div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            className="w-full border rounded-md px-4 py-2"
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full border rounded-md px-4 py-2"
            onChange={handleChange}
            required
          />
          {/* Password */}
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Create a password"
              className="w-full border rounded-md px-4 py-2 pr-10"
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPass ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
            </span>
          </div>
          {/* Confirm Password */}
          <div className="relative">
            <input
              type={showConfirm ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full border rounded-md px-4 py-2 pr-10"
              onChange={handleChange}
              required
            />
            <span
              onClick={() => setShowConfirm(!showConfirm)}
              className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showConfirm ? <IoEyeOffOutline size={20} /> : <IoEyeOutline size={20} />}
            </span>
          </div>

          {/* Terms */}
          <label className="flex gap-2 items-start text-sm text-gray-600">
            <input
              type="checkbox"
              name="agree"
              className="mt-1"
              onChange={handleChange}
            />
            I agree to the{" "}
            <a href="#" className="text-blue-600 underline">
              Terms of Service
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 underline">
              Privacy Policy
            </a>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={isFormInvalid}
            className={`w-full py-2 rounded-md font-semibold text-white transition ${
              isFormInvalid
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90"
            }`}
          >
            Create account
          </button>
        </form>

        <p className="text-xs text-center text-gray-500 mt-4">
          By creating an account, you agree to our{" "}
          <a href="#" className="text-blue-600 underline">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="text-blue-600 underline">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
}

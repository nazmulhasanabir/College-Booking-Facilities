"use client";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../firebase/config";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useRouter();
  const provider = new GoogleAuthProvider();

  const handleGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        useRouter('/')
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      const res = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      console.log(res);

      // Add your auth logic here
      console.log("Login:", form);
      toast.success("Successfully Login!", {
        style: {
          border: "1px solid #713200",
          padding: "32px",
        },
      });
      navigate.push("/");
    } catch (error) {
      console.error("Error creating or updating user:", error.message);

      toast.error(`Failed to create user: ${error.message}`, {
        style: {
          border: "1px solid #713200",
          padding: "32px",
        },
      });
    }
  };
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-100 flex items-center justify-center px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Sign In
        </h2>

        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={handleGoogle}
            className="flex items-center gap-2 border px-5 py-2 rounded-md text-sm font-medium hover:shadow-md"
          >
            <FcGoogle size={20} /> Google
          </button>
          <button className="flex items-center gap-2 border px-5 py-2 rounded-md text-sm font-medium hover:shadow-md text-blue-600">
            <FaFacebook size={20} /> Facebook
          </button>
        </div>

        <div className="text-center text-gray-400 text-sm mb-4">
          or sign in with email
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={form.email}
            onChange={handleChange}
            className="w-full border rounded-md px-4 py-2"
            required
          />

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full border rounded-md px-4 py-2 pr-10"
              required
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-gray-500"
            >
              {showPassword ? (
                <IoEyeOffOutline size={20} />
              ) : (
                <IoEyeOutline size={20} />
              )}
            </span>
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition"
          >
            Sign In
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-gray-600">
          Don’t have an account?{" "}
          <a href="/sign-up" className="text-blue-600 underline">
            Create one
          </a>
        </p>
      </div>
    </div>
  );
}

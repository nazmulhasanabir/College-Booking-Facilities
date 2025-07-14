"use client"
import Link from "next/link";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth"; // Import useAuthState
import {  signOut } from "firebase/auth"; // Import getAuth and signOut
import auth from "@/app/firebase/config";

// Assuming you have your Firebase app initialized in a separate file, e.g., firebaseConfig.js
// import { app } from '../firebaseConfig'; // Adjust the path as needed

const Navbar = () => {
  // const auth = getAuth(); // Get the auth instance
  const [user, loading, error] = useAuthState(auth); // Use the hook to get user state
  console.log(user);
  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/college"}>Colleges</Link>
              </li>
              <li>
                <Link href={"/admission"}>Admission Form</Link>
              </li>
              <li>
                <Link href={"/my-college"}>My College</Link>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">BookMyCampus</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/college"}>Colleges</Link>
            </li>
            <li>
              <Link href={"/admission"}>Admission Form</Link>
            </li>
            <li>
              <Link href={"/my-college"}>My College</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-1">
            {loading && <li>Loading...</li>} {/* Show loading state */}
            {error && <li>Error: {error.message}</li>} {/* Show error state */}

            {!loading && !user && (
              <li>
                <Link href={"/sign-in"}>Sign In</Link> {/* Changed from sign-up to sign-in */}
              </li>
            )}
            {!loading && user && (
              <>
                {/* Optional: Display user's display name or email if available */}
                {user.displayName && <li>Hello, {user.displayName}</li>}
                {user.email && !user.displayName && <li>Hello, {user.email}</li>}

                <li>
                  <button onClick={handleLogout} className="btn btn-ghost">
                    Logout
                  </button>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
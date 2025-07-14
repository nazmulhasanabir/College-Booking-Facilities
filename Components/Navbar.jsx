"use client"
import Link from "next/link"
import { useAuthState } from "react-firebase-hooks/auth"
import { signOut } from "firebase/auth"
import auth from "@/app/firebase/config"

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth)
  console.log("User in Navbar:", user)

  const handleLogout = async () => {
    try {
      await signOut(auth)
      console.log("User signed out successfully!")
    } catch (error) {
      console.error("Error signing out:", error.message)
    }
  }

  // Define the navigation links
  const navLinks = (
    <>
      <li>
        <Link
          href={"/"}
          className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-all duration-200 font-medium"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          href={"/college"}
          className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-all duration-200 font-medium"
        >
          Colleges
        </Link>
      </li>
      <li>
        <Link
          href={"/admission"}
          className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-all duration-200 font-medium"
        >
          Admission Form
        </Link>
      </li>
      {!loading && user && (
        <li>
          <Link
            href={"/my-college"}
            className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg px-3 py-2 transition-all duration-200 font-medium"
          >
            My College
          </Link>
        </li>
      )}
    </>
  )

  return (
    <div>
      <div className="navbar bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden hover:bg-gray-100 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            {/* Mobile Dropdown Menu */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-xl z-[1] mt-3 w-64 p-3 shadow-xl border border-gray-100"
            >
              {navLinks}
            </ul>
          </div>
          <Link
            href="/"
            className="btn btn-ghost text-2xl font-bold text-gray-800 hover:text-blue-600 hover:bg-transparent"
          >
            BookMyCampus
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          {/* Desktop Menu */}
          <ul className="menu menu-horizontal px-1 space-x-2">{navLinks}</ul>
        </div>

        <div className="navbar-end">
          <div className="flex items-center space-x-4">
            {loading && (
              <div className="flex items-center text-gray-500">
                <div className="loading loading-spinner loading-sm mr-2"></div>
                <span className="text-sm font-medium">Loading...</span>
              </div>
            )}

            {error && (
              <div className="text-red-600 text-sm font-medium bg-red-50 px-3 py-1 rounded-lg">
                Error: {error.message}
              </div>
            )}

            {/* Authentication buttons */}
            {!loading && !user && (
              <Link
                href={"/sign-in"}
                className="btn bg-blue-600 hover:bg-blue-700 text-white border-none px-6 py-2 rounded-lg font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                Sign In
              </Link>
            )}

            {!loading && user && (
              <div className="flex items-center space-x-3">
                <div className="hidden sm:flex items-center space-x-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {user.displayName
                        ? user.displayName.charAt(0).toUpperCase()
                        : user.email?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="text-sm">
                    <div className="font-medium text-gray-800">
                      {user.displayName && `Hello, ${user.displayName}`}
                      {user.email && !user.displayName && `Hello, ${user.email.split("@")[0]}`}
                    </div>
                    <div className="text-gray-500 text-xs">{user.email}</div>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="btn bg-gray-100 hover:bg-gray-200 text-gray-700 border-none px-4 py-2 rounded-lg font-medium transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

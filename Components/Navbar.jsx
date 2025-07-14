"use client";
import Link from "next/link";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "@/app/firebase/config";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log("User in Navbar:", user);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("User signed out successfully!");
    } catch (error) {
      console.error("Error signing out:", error.message);
    }
  };

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
  );

  return (
    <div>
      <div className="navbar bg-blue-300  shadow-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-gray-100 text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 rounded-lg px-3 py-2 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
                      src={user.photoURL || "https://via.placeholder.com/32"}
                      alt="Profile"
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-800">
                    {user.displayName || user.email.split("@")[0]}
                  </span>
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu bg-white rounded-xl z-[1] mt-2 w-64 p-4 shadow-lg border border-gray-200"
                >
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover"
                        src={user.photoURL || "https://via.placeholder.com/64"}
                        alt="Profile"
                      />
                    </div>
                    <div className="text-center mt-2">
                      <div className="font-medium text-gray-800">
                        {user.displayName || "User"}
                      </div>
                      <div className="text-green-600 text-sm">{user.email}</div>
                    </div>
                  </div>
                  <li>
                    <Link
                      href="/profile"
                      className="text-gray-700 hover:text-purple-600 hover:bg-purple-50 rounded-lg px-3 py-2 transition-all duration-200 font-medium flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path
                          fillRule="evenodd"
                          d="M10 0a10 10 0 100 20 10 10 0 000-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                        />
                      </svg>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={handleLogout}
                      className="text-gray-700 hover:text-red-600 hover:bg-red-50 rounded-lg px-3 py-2 w-full text-left transition-all duration-200 font-medium flex items-center"
                    >
                      <svg
                        className="w-5 h-5 mr-2"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h7v-2H4V5h10v6h2V4a1 1 0 00-1-1H3zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H9a1 1 0 100 2h5.586l-1.293 1.293z"
                        />
                      </svg>
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

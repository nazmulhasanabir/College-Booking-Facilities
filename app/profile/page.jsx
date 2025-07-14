"use client";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "@/app/firebase/config";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const [user, loading, error] = useAuthState(auth);
  const router = useRouter();
  const [profileData, setProfileData] = useState({
    fullName: "",
    email: "",
    university: "",
    phoneNumber: "",
    dateOfBirth: "",
    applications: 0,
    memberSince: "",
    collegeWiseApplications: {},
  });
  const [applicationData, setApplicationData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (user?.email) {
      const fetchApplications = async () => {
        try {
          setIsLoading(true);
          const res = await fetch(`/api/application?email=${user.email}`);
          if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
          }
          const data = await res.json();

          // Store application data
          const applications = Array.isArray(data) ? data : [];
          setApplicationData(applications);

          // Count applications by college name
          const collegeWiseCount = {};
          applications.forEach((app) => {
            if (app.collegeName) {
              collegeWiseCount[app.collegeName] =
                (collegeWiseCount[app.collegeName] || 0) + 1;
            }
          });

          // Update profile data
          setProfileData((prev) => ({
            ...prev,
            fullName: user.displayName || "N/A",
            email: user.email || "N/A",
            applications: applications.length,
            collegeWiseApplications: collegeWiseCount,
            memberSince: user.metadata?.creationTime
              ? new Date(user.metadata.creationTime).getFullYear().toString()
              : "N/A",
          }));
        } catch (error) {
          console.error("Error fetching applications:", error);
          setProfileData((prev) => ({
            ...prev,
            applications: 0,
            collegeWiseApplications: {},
          }));
        } finally {
          setIsLoading(false);
        }
      };
      fetchApplications();
    }
  }, [user]);

  if (loading || isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-600 text-center p-4">Error: {error.message}</div>
    );
  }

  if (!user) {
    return (
      <div className="text-center p-4">
        Please sign in to view your profile.
      </div>
    );
  }

  const ProfileHeader = ({ user }) => {
    const memberSince = user?.metadata?.creationTime
      ? new Date(user.metadata.creationTime).getFullYear()
      : "2025";

    return (
      <div className="bg-gradient-to-r from-blue-300 via-blue-300 to-blue-300 text-white">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Back Button */}
          <button
            onClick={() => router.push("/")} // 👈 navigate to home
            className="flex items-center text-white/90 hover:text-white mb-6 transition-colors duration-200"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Home
          </button>

          {/* Profile Info */}
          <div className="flex items-center space-x-6">
            {/* Profile Picture */}
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center overflow-hidden border-4 border-white/20">
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {user?.displayName?.charAt(0) ||
                        user?.email?.charAt(0) ||
                        "U"}
                    </span>
                  </div>
                )}
              </div>
              {/* Online Status Indicator */}
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-3 border-white"></div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">
                {user?.displayName || "User Name"}
              </h1>
              <p className="text-white/80 text-lg mb-3">
                {user?.email || "user@example.com"}
              </p>
              <div className="flex items-center text-white/70">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m0 4v10a1 1 0 01-1 1H9a1 1 0 01-1-1V11m4-4h6a1 1 0 011 1v10a1 1 0 01-1 1H9a1 1 0 01-1-1V7a1 1 0 011-1h6z"
                  />
                </svg>
                <span className="text-sm">Member since {memberSince}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const handleBackClick = () => {
    // You can implement navigation logic here
    // For example: router.push('/') or window.history.back()
    console.log("Back button clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100">
      {/* Profile Header */}
      <ProfileHeader user={user} onBackClick={handleBackClick} />

      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 border border-gray-200 mx-6 -mt-4 relative z-10">
        {/* Profile Information Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-gray-800 flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M10 0a10 10 0 100 20 10 10 0 000-20zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                  />
                </svg>
                Profile Information
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-blue-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  Full Name
                </h3>
                <p className="text-gray-800 mt-1">{profileData.fullName}</p>
              </div>
              <div className="bg-pink-50 p-4 rounded-lg border border-pink-200">
                <h3 className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-pink-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  Email Address
                </h3>
                <p className="text-gray-800 mt-1">{profileData.email}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-green-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  </svg>
                  University/College
                </h3>
                <p className="text-gray-800 mt-1">
                  {profileData.university || "N/A"}
                </p>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h3 className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Phone Number
                </h3>
                <p className="text-gray-800 mt-1">
                  {profileData.phoneNumber || "N/A"}
                </p>
              </div>
              <div className="bg-indigo-50 p-4 rounded-lg border border-indigo-200">
                <h3 className="text-sm text-gray-600 flex items-center">
                  <svg
                    className="w-4 h-4 mr-2 text-indigo-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V4zm2 0v12h14V4H3zm2 2h2v2H5V6zm0 4h2v2H5v-2zm0 4h2v2H5v-2zm4-8h2v2H9V6zm0 4h2v2H9v-2zm0 4h2v2H9v-2zm4-8h2v2h-2V6zm0 4h2v2h-2v-2zm0 4h2v2h-2v-2z" />
                  </svg>
                  Date of Birth
                </h3>
                <p className="text-gray-800 mt-1">
                  {profileData.dateOfBirth || "N/A"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Account Stats Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
            <svg
              className="w-6 h-6 mr-2 text-green-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm2 0v8h12V6H4zm2 2h8v2H6V8zm0 4h5v2H6v-2z" />
            </svg>
            Account Stats
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-100 p-4 rounded-lg border border-blue-200">
              <h3 className="text-sm text-gray-600">Total Applications</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">
                {profileData.applications}
              </p>
            </div>
            <div className="bg-green-100 p-4 rounded-lg border border-green-200">
              <h3 className="text-sm text-gray-600">Member Since</h3>
              <p className="text-2xl font-bold text-gray-800 mt-1">
                {profileData.memberSince}
              </p>
            </div>
          </div>
        </div>

        {/* College-wise Applications Section */}
        {Object.keys(profileData.collegeWiseApplications).length > 0 && (
          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
              <svg
                className="w-6 h-6 mr-2 text-purple-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Applications by College
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {Object.entries(profileData.collegeWiseApplications).map(
                ([collegeName, count]) => (
                  <div
                    key={collegeName}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200"
                  >
                    <h3 className="text-sm text-gray-600 mb-1">College Name</h3>
                    <p
                      className="text-gray-800 font-medium mb-2 truncate"
                      title={collegeName}
                    >
                      {collegeName}
                    </p>
                    <div className="flex items-center">
                      <span className="text-xs text-gray-500 mr-2">
                        Applications:
                      </span>
                      <span className="text-lg font-bold text-purple-600">
                        {count}
                      </span>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}

        {/* Sign Out Button */}
        <div className="mt-8 text-center">
          <button
            onClick={() => signOut(auth)}
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg transition-colors duration-200"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
